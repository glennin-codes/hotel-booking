import user from "../models/user.js";
import joi from "joi";
import bcrypt from "bcrypt";
import createError from "../Errors/createError.js";
import jwt from "jsonwebtoken";


  export const register= async (req,res,next)=>{
   try { 
      const salt = await bcrypt.genSalt(10);
      const hashpwd= await bcrypt.hash(req.body.password,salt)
    const newUSer= new user({
        username: req.body.username,
        email: req.body.email,
        password:hashpwd
    })
      await newUSer.save()
      res.status(200).send(`created! user succesfuly`)    
   } catch (err) {
    next(err)
   }
   
}

  export const login = async (req,res,next)=>{
   try {
      const User = await user.findOne({email:req.body.email})
      if(!User) return next(createError(404,"User not found with the such email"))
      const isPasswordCorrect = await bcrypt.compare(req.body.password,User.password)
      if(!isPasswordCorrect) return next( createError(400,"wrong password or Email"))
      
      //jwt
      const token=jwt.sign({id:User._id,isAdmin:User.isAdmin},process.env.JWT);

      
      const {password,isAdmin,...otherDetails}=User._doc
       //passing in the cookie
      res.cookie("access_token",token,{
         httpOnly:true
      }).status(200).send({...otherDetails})

   } catch (err) {
      next(err)
   }
}




