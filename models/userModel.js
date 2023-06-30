import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
     },
     phone:{
        type:String,
        required:true,
     },
     address:{
        type:{},
        required:true,
     },
     //for forgot password
     answer:{
        type:String,
        required:true,
     },
     role:{
        type:Number,
        default:0,
     },
    },

{timestamps:true}
//due to this when we create new user that time will be added.
);
export default mongoose.model("users",userSchema);

