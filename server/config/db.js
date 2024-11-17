import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()

const connectDb = async() =>{ 

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Db Connected")
        
    } catch (error) {
        console.log(error)
    }
}

export default connectDb