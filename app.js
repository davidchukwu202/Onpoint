import express,{Router} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ConnectDb from "./configs/db.js";
import { route } from "./routes/userRoute.js";
dotenv.config();


const router= Router();


const app = express();
const port = process.env.PORT;
app.use(express.json());

ConnectDb();

app.get('/',(req, res) =>{
    res.send("HIACUND NIGERIA LIMITED HOME PAGE");
});

app.use('/api/v1',route);

app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
});

