const express=require("express");
const router=express.Router({mergeParams:true});

const homepageController=require("../controllers/homepage");

router.get("/Regulator",homepageController.regulator)
router.get("/Citizen",homepageController.citizen);
router.get("/GovernmentOfficer",homepageController.governmentOfficer);

router.post("/Regulator",homepageController.regulatorPost);
router.post("/Citizen",homepageController.citizenPost);
router.post("/GovernmentOfficer",homepageController.governmentOfficer);