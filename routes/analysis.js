const express=require("express");
const router=express.Router({mergeParams:true});
const {userschema}=require("../schema");
const { isLoggedIn } = require("../middleware");

//login dashboard
router.get("/login",isLoggedIn)

app.use((req,res,next)=>{
    res.locals.success="success"
    res.locals.error="error"
    res.locals.currUser=req.user;
    next();
})