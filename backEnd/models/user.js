import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    usernamegh fvd :{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        trype:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},{timestamps:true})
 
 export default mongoose.model('users',userSchema)