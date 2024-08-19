import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get('/',(req, res) =>{
    res.send("HIACUND NIGERIA LIMITED HOME PAGE");
});

app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
});

