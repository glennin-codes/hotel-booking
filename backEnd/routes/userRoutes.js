import {getAllUsers,getUser,updateUser,deleteUser} from "../users/userController.js";
import express from "express";
import { verifyToken } from "../util/verifyToken.js";
const userRouter = express.Router();
userRouter.route('/:dataAmount').get(getAllUsers)
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);

userRouter.route("//check/checkAuthentication/").get(verifyToken,(req,res,next)=>{
    res.send( "you are authenticated");
})
export default userRouter;