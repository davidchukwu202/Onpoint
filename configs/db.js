import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDb = async()=>{
    mongoose.connect(process.env.Mongo_uri);

    const db = mongoose.connection

    db.on('error',console.error.bind(console,'database not active'));
    db.once( 'open',()=>{
        console.log("DATABASE ACTIVE")
    });
} 

export default ConnectDb;


