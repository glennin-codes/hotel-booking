import express from 'express';
const authRouter =express.Router();
import register from "../auth/authController.js"

authRouter.route("/register").post(register)
export default authRouter;