import express from 'express';
const regRouter =express.Router();
import register from "../auth/authController.js"

regRouter.route("/register").post(register)
export default regRouter;