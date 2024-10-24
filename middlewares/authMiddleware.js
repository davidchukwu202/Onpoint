import jwt  from "jsonwebtoken";
import userService from "../services/userService";
const User = new userService();

const authenticate = (req,res,next)=>{
    const token= req.cookies.token
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
