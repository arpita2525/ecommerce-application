import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import cors from "cors";
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js';
import path from "path";
import {fileURLToPath} from 'url';
dotenv.config();
//env file is present in main file so it is not present in any sub file so there is nood to specify the path of dotenv file if it is in subfolder or file then thre is need of specifying path
//dotenv.config({path:''})

//database connection/config
connectDB();


//rest  object
const __filename =fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./client/build')))

// routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/products",productRoutes);
// rest api
app.use('*',function(req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

// port
// we take process here by default for the env file
const PORT=process.env.PORT || 8080;
// port name should be sAME AS IT above and in dotenvfile or if there is some error in dotenv file then it goes for optional we suggested 8080

// run listen
// app.listen(PORT,()=>{
//     console.log(`server running on ${PORT}`.bgCyan.white);
   
// });
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
