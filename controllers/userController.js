
import userService from "../services/userService.js";
const {createUser,getAllUsers,getUser,deleteUser,updateUser}= new userService


export default class userController{
    async createUser(req,res,next){
        try {
            const user= await createUser(req.body)
            res.status(201).json(user);
        } catch (error) {
            next(error);
            
        }

    }

    async getAllUsers(req,res,next){
        try{
            const getUsers= await getAllUsers();
            res.status(200).json(getUsers);
        
        }catch(error){
            next(error);
        }
    }

    async getUser(req,res,next){
        try {
            const User= await getUser(req.params.id);
            res.status(200).json(User);
        } catch (error) {
            next(error);
            
        }
    }
    async updateUser(req,res,next){
        try {
            const update= await updateUser(req.params.id, req.body)
            if(!update){
                return res.status(404).json({error:"user not found"})     
            }
            res.status(200).json(updateUser);
        } catch (error) {
            next()
            
        }
    } 
    
    async deleteUser(req,res,next){
        try {
            const Delete= await deleteUser(req.params.id)
            res.status(200).json(Delete);
        } catch (error) {
            next();
            
        }
    }
};