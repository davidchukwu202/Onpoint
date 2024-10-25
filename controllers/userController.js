
import userService from "../services/userService.js";
const {createUser,getAllUsers,getUser,deleteUser,updateUser,findByEmail}= new userService();
import { authenticate,createToken } from "../middlewares/authMiddleware.js";
import bcrypt from "bcryptjs"


export default class userController{
    async createUser(req,res,next){
        try {
            const{email,name,password}=req.body;
            if(await findByEmail(email)){
                return res.status(409).json({message:"email already exists"})}
            const hasedPassword= await bcrypt.hash(password,10);


            const user= await createUser({
                name,email,password: hasedPassword
            });
            const token= createToken(user);
            res.cookie("token",token,{
                httpOnly:true,
                maxAge: 2*24*60*60*1000
            })

            res.status(201).send({
                message: "user created",
                user

            });
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
            res.status(200).json(update);
        } catch (error) {
            next(error)
            
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

    async login(req,res){
            const {email,password}= req.body
            const user=await findByEmail(email);
            if (!user){
                return res.status(400).send({
                    success:false,
                    message: "invaild credentials"
                });

            }
            const hasedPassword= await bcrypt.compare(password,user.password)
            if (!hasedPassword){
                return res.status(400).send({
                    success :false,
                    message:"invalid Credentials"
                    
                });

            }

            const token = createToken(user);
            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 2 * 24 * 60 * 60 * 1000
            });

            return res.status(200).send({
                success: true,
                message: "User logged in successfully",
                user,
                token
            });
        } catch (error) {
            next(error);
        }
    }
           
    
            
        
    
