import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers

        if (!token) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        const token_decode = jwt.decode(token)

        if (!token_decode) {
            return res.json({ success: false, message: 'Invalid Token' })
        }

        // Clerk's default session token stores the user id under the
        // standard "sub" claim. Fall back to "clerkId" too, in case a
        // custom JWT template that adds that claim is used instead.
        req.clerkId = token_decode.clerkId || token_decode.sub

        if (!req.clerkId) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        next()
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

export default authUser
