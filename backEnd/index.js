import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./db/config.js";
const app =express();
import regRouter from "./routes/usersRoutes.js";
import router from "./routes/hotelRoutes.js"
import errorHandler from "./Errors/errorHandler.js"
import createError from "./Errors/createError.js"
dotenv.config();
const port = 8000;


app.use(cors());
app.use(express.json()); 
app.use("/api/hotelbooking",router)
app.use("/api/auth",regRouter)
app.use(errorHandler)
app.use(createError)
app.get('/',(req,res)=>{
    res.send("hii")
})

 const start = async ()=>{
    try {
        await connect(process.env.MONGO_URL);
        console.log('connected to db');
    
    } catch (err) {
        throw err
    }
    app.listen(port,()=>{
        console.log(`server running on ...${port}`);
    })
 }

start();