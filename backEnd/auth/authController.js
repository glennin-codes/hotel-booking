import user from "../models/user.js";
import joi from "joi";
import bcrypt from "bcrypt";


const register= async (req,res,next)=>{
   try {
    const newUSer= new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
      await newUSer.save()
      res.status(200).send(`created! user succesfuly`)    
   } catch (err) {
    next(err)
   }
   

}
export default register;