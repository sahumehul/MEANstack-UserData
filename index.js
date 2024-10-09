const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/user");
const cors =require("cors")
require("dotenv").config()
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
  await mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("mongo Connected");
    
  }).catch((err)=>{
    console.log(err);
    
  })
}

connectDB();

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/",router)

app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}`);
    
})