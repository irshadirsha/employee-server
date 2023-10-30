const empModel=require('./Model/empModel')
const home=(req,res)=>{
    res.send("its working")
}
const addEmployee=async (req,res,next)=>{
    const {empdata}=req.body
    console.log("api",empdata);
    const newEmployee= new empModel({
        name:empdata.name,
        phone:empdata.phone,
        email:empdata.email,
        designation:empdata.designation,
        address:empdata.address
    })
    await newEmployee.save()
    res.status(200).json({ status:true,message: "Data received successfully" });
}
module.exports={home,addEmployee}