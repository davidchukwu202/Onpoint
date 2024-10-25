import jwt  from "jsonwebtoken";
import userService from "../services/userService.js";
const User = new userService();
import dotenv from "dotenv";
dotenv.config();


export const authenticate = async (req,res,next)=>{
    const token= req.cookie.token
    if(!token){
        return res.status(401).json({message:"not a vaild token "});
    }


    jwt.verify(token,process.env.jwtToken,async(err,decoded)=>{
        if(err){
            return res.status(401).json({message:"Invaild Token"});
        }else{
            const user= await User.getUser(decoded.id);
            if(!user){
                return res.status(401).json({message:"Invaild Id"});
            }
            next();
        }
    })
  


}

export const createToken=(user)=>{
    if(!user||!user._id||!user.email){
        throw new Error("invalid user parameters");
        
    }
    try {
        return jwt.sign({
            id:user._id,
            email: user.email

        },process.env.jwtToken,{expiresIn:"2d"});
    } catch (error) {
        console.error("Did not not generate token")
        throw error;
        
        
    }
}