import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required:true,
    },
    address:{
        type: String,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    },
    blood_group:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
    }
})


export default mongoose.model("User", ProfileSchema);