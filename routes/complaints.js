const express=require("express");
const router=express.Router({mergeParams:true});
const {userschema}=require("../schema");
const { isLoggedIn } = require("../middleware");