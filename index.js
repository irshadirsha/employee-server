const express =require("express")
var cors = require('cors')
const app=express()
const mongoose = require('mongoose');

app.use(express.json());
const data=require('./Controller/config/conection')
data()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
    credentials: true
  }));
  
const userRouter=require('./Router/userRouter')
app.use('/',userRouter)

app.listen(4000,()=>{
    console.log("server running at port 3000")
})
