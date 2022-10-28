import user from "../models/user";
import joi from "joi";
import bcrypt from "bcrypt";


const register= async (req,res,next)=>{
   try {
    const newUSer= new user({
        username:req.body.userModel,
        email:req.body.email,
        password:req.body.password
    })
    res.status(200).send(`created! user  ${username} succesfuly`)
      await newUSer.save()

    
   } catch (err) {
    next(err)
   }
   

}
export default register;