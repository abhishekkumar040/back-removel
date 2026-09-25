import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', ()=>{
        console.log("Database Connected");
    })

    // Fixed: use the actual database name shown in Atlas ("BACK"),
    // no space in the path (a space there is invalid in a Mongo URI).
    await mongoose.connect(`${process.env.MONGODB_URI}/BACK`)

}

export default connectDB;