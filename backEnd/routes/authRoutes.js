import express from 'express';
const router =express.Router();
import register from "../auth/authController.js"

router.get('/register',register)
