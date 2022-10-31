import express from 'express';
const authRouter =express.Router();
import {register,login} from "../auth/authController.js"


authRouter.route("/register").post(register)
authRouter.route("/login").post(login)
export default authRouter