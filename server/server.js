import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js' // <-- Added the 's' here
import userRouter from './routes/userRoutes.js'

// App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Intialize Middlewares
// IMPORTANT: the Clerk webhook route needs the RAW body to verify the
// svix signature, so it must get express.raw() BEFORE the global
// express.json() parser touches it.
app.use('/api/user/webhooks', express.raw({ type: 'application/json' }))
app.use(express.json())
app.use(cors())

// API Routes
app.get('/',(req,res)=> res.send("API Working"))
app.use('/api/user',userRouter)

app.listen(PORT, ()=> console.log("Server Running on port "+PORT))