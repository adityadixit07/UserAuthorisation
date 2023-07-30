import express from "express";
import { register,login } from "../controllers/userController.js";
import {verifyToken as auth} from '../middleware/auth.js'

export const router=express.Router();


// register route
router.route('/register').post(register);

// login
router.route('/login').post(auth,login);