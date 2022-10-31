import {getAllUsers,getUser,updateUser,deleteUser} from "../users/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.route('/dataAmount').get(getAllUsers)
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);
export default userRouter