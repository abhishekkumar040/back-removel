import { Webhook } from 'svix'
import userModel from '../models/userModel.js'
import razorpay from 'razorpay'
import transactionModel from '../models/transactionModel.js'

// API Controller Function to Manage Clerk User with database
// Endpoint: /api/user/webhooks
const clerkWebhooks = async (req, res) => {
    try {
        // Create a Svix instance with Clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Fetch headers required by Svix
        const svix_id = req.headers["svix-id"]
        const svix_timestamp = req.headers["svix-timestamp"]
        const svix_signature = req.headers["svix-signature"]

        if (!svix_id || !svix_timestamp || !svix_signature) {
            return res.status(400).json({ success: false, message: "Missing Svix headers" })
        }

        // Verify payload signature
        const payload = typeof req.body === 'string' || Buffer.isBuffer(req.body)
            ? req.body
            : JSON.stringify(req.body)

        whook.verify(payload, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature
        })

        const evt = JSON.parse(payload)
        const { data, type } = evt

        switch (type) {
            case 'user.created': {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0]?.email_address || '',
                    firstName: data.first_name || '',
                    lastName: data.last_name || '',
                    photo: data.image_url || ''
                }

                await userModel.create(userData)
                return res.status(200).json({ success: true, message: "User created" })
            }

            case 'user.updated': {
                const userData = {
                    email: data.email_addresses[0]?.email_address || '',
                    firstName: data.first_name || '',
                    lastName: data.last_name || '',
                    photo: data.image_url || ''
                }

                await userModel.findOneAndUpdate({ clerkId: data.id }, userData, { new: true })
                return res.status(200).json({ success: true, message: "User updated" })
            }

            case 'user.deleted': {
                await userModel.findOneAndDelete({ clerkId: data.id })
                return res.status(200).json({ success: true, message: "User deleted" })
            }

            default:
                return res.status(200).json({ success: true, message: "Webhook event unhandled" })
        }

    } catch (error) {
        console.error("Clerk Webhook Error:", error.message)
        return res.status(400).json({ success: false, message: error.message })
    }
}

// API Controller function to get user available credits data
const userCredits = async (req, res) => {
    try {
        const { clerkId } = req
        const userData = await userModel.findOne({ clerkId })

        if (!userData) {
            return res.json({ success: false, message: 'User not found for clerkId: ' + clerkId })
        }

        res.json({ success: true, credits: userData.creditBalance })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

// API to create a Razorpay order for a credit plan
const paymentRazorpay = async (req, res) => {
    try {
        const { clerkId } = req
        const { planId } = req.body

        const userData = await userModel.findOne({ clerkId })
        if (!userData || !planId) {
            return res.json({ success: false, message: 'Invalid credentials' })
        }

        let credits, plan, amount

        switch (planId) {
            case 'Basic':
                plan = 'Basic'; credits = 100; amount = 10; break
            case 'Advanced':
                plan = 'Advanced'; credits = 500; amount = 50; break
            case 'Business':
                plan = 'Business'; credits = 5000; amount = 250; break
            default:
                return res.json({ success: false, message: 'Plan not found' })
        }

        const date = Date.now()

        const transactionData = {
            clerkId,
            plan,
            amount,
            credits,
            date
        }

        const newTransaction = await transactionModel.create(transactionData)

        const options = {
            amount: amount * 100, // amount in the smallest currency unit (paise)
            currency: process.env.CURRENCY || 'INR',
            receipt: newTransaction._id.toString()
        }

        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.json({ success: false, message: error })
            }
            res.json({ success: true, order })
        })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// API to verify a completed Razorpay payment and add credits
const verifyRazorpay = async (req, res) => {
    try {
        const { razorpay_order_id } = req.body

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

        if (orderInfo.status === 'paid') {
            const transactionData = await transactionModel.findById(orderInfo.receipt)

            if (!transactionData) {
                return res.json({ success: false, message: 'Transaction not found' })
            }
            if (transactionData.payment) {
                return res.json({ success: false, message: 'Payment already verified' })
            }

            const userData = await userModel.findOne({ clerkId: transactionData.clerkId })
            const creditBalance = userData.creditBalance + transactionData.credits
            await userModel.findByIdAndUpdate(userData._id, { creditBalance })

            await transactionModel.findByIdAndUpdate(transactionData._id, { payment: true })

            res.json({ success: true, message: 'Credits Added' })
        } else {
            res.json({ success: false, message: 'Payment Failed' })
        }

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

export { clerkWebhooks, userCredits, paymentRazorpay, verifyRazorpay }
