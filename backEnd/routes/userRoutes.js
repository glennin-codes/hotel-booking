import {getAllUsers,getUser,updateUser,deleteUser} from "../users/userController.js";
import express from "express";
import { verifyToken,verifyUser } from "../util/verifyToken.js";
const userRouter = express.Router();
userRouter.route('/:dataAmount').get(getAllUsers)
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);

userRouter.route("/check/checkAuthentication").get(verifyToken,(req,res,next)=>{
    res.send( "you are authenticated");
})
.get("/user/:id",verifyUser,(req,res)=>{
    res.send("you are logged in and you can delete")
})
export default userRouter;