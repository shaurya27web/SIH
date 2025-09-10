const express=require("express");
const router=express.Router({mergeParams:true});
const {dashboardschema}=require("../schema");
const dashboardController=require("../controllers/dashboard");
const { isLoggedIn } = require("../middleware"); 

router.get("/dashboard",isLoggedIn,dashboardController.dashboard);
router.get("dashboard/notifications",isLoggedIn,dashboardController.notifications);
router.get("dashboard/trendingTopics",dashboardController.trendingTopics);
router.get("dashboard/FAQs",dashboardController.faqs);