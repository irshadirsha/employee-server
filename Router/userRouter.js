const express = require("express");
const router = express.Router();
const userController=require('../Controller/userController')

// router.get('/',(req,res,next)=>{
//     res.send("hello world")
// })
router.get('/',userController.home)
router.post('/addemp',userController.addEmployee)

module.exports=router
