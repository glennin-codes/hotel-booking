import user from "../models/user";
import joi from "joi";
import bcrypt from "bcrypt";


const userModel= new user({
  username:req.body.userModel,
  email:req.body.email,
  password:req.body.password
})