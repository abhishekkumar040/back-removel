import { Webhook } from 'svix'
import userModel from '../models/userModel.js'

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
        // Note: Use raw body buffer/string if available (e.g., req.rawBody or req.body)
        const payload = typeof req.body === 'string' || Buffer.isBuffer(req.body)
            ? req.body 
            : JSON.stringify(req.body)

        const evt = whook.verify(payload, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature
        })

        // Extract verified event data and type
        const { data, type } = evt

        // Handle specific event types
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

export { clerkWebhooks }