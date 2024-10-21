import User from "../models/user.js";

export default class userService{
     async createUser(user){
        const userId= await User.create(user);
        return User.findOne({_id: user._id},"-__v-password");

     }
     async getAllUsers(){
        return await User.findOne()

     }

     async getUser(id){
        return await User.findOne({_id:id},"-__v-password");
     }

     async updateUser(id){
        return await User.findByIdAndUpdate({_id:id},"-__v-password");

     }

     async deleteUser(id){
        return await User.findOneAndDelete({_id:id},"-__v-password");
     }

     
}