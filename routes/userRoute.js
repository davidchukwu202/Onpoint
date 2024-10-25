import userController from "../controllers/userController.js";
import {Router} from "express";

const {createUser,getUser,getAllUsers,updateUser,deleteUser,login} = new userController

export const route= Router();

route.post("/signup",createUser)
route.get("/:id",getUser)
route.get("/",getAllUsers)
route.put("/:id",updateUser)
route.delete("/:id",deleteUser)
route.post("/login",login)
