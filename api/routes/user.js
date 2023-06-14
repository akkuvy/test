const express=require("express");
const userHelpers = require("../helpers/userHelpers");
const router=express.Router();

router.post("/login",(req,res)=>{
  console.log(req.body);
})
module.exports=router;