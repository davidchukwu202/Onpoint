import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    name:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    address:{type: String, required:true},
    role:{type:String, required:true, enum:['truck boy','drivers','sale girls','security','worker'],
        default:'worker'},
    age:{type:String},
    credential:{type: String, required: true }

},{timestamp:true});

const Worker = mongoose.model('Worker',workerSchema);