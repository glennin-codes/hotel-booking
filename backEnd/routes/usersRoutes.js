import express from 'express';
const regRouter =express.Router();
import {register,login} from "../auth/authController.js"
import router from './hotelRoutes.js';

regRouter.route("/register").post(register)
regRouter.route("/login").post(login)
export default regRouter