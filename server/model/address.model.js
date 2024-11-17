import mongoose from "mongoose";


const addressSchema = new mongoose.Schema(
    {
        address_line:{
            type: String,
            default: ""
        },
        city:{
            type: String
        },
        state:{
            type: String,
            default: ""
        },
        pincode:{
            type: String
        },
        country:{
            type: String
        },
        mobileNo:{
            type: String,
            default: null

        },
        status:{
            type: Boolean,
            default: true
        }
    },
    {timestamps:true}
)

const addressModel = mongoose.model("address", addressSchema)

export default addressModel