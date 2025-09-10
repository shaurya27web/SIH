const express=require("express");
const router=express.Router({mergeParams:true});

const regulatorController=require("../controllers/regulator");

router.get("/regulatorProfile",regulatorController.profile);

router.get("/regulatorDashboard",regulatorController.dashboard);
router.get("/regulatormanagement",regulatorController.management);
router.get("/monitoring",regulatorController.monitoring);
router.get("/report",regulatorController.report);
router.get("/audit",regulatorController.audit);

router.get("/logout",regulatorController.logout);

router.post("/regulatorDashboard",regulatorController.postdashboard);
router.post("/regulatormanagement",regulatorController.postmanagement);
router.post("/monitoring",regulatorController.postregulatormonitoring);
router.post("/report",regulatorController.postreport);
router.post("/audit",regulatorController.postaudit);

router.get("/logout",regulatorController.postlogout);
