const express=require("express");
const router=express.Router({mergeParams:true});

const governmentOfficerController=require("../controllers/governmentOfficer");

router.get("/officerProfile",governmentOfficerController.officerProfile);
router.get("/profile/edit",governmentOfficerController.editofficerProfile);

router.get("/officerDashboard",governmentOfficerController.dashboard);
router.get("/summaries",governmentOfficerController.summaries);
router.get("/commentCluster",governmentOfficerController.clusters);
router.get("/officerManagement",governmentOfficerController.management);

router.get("/logout",governmentOfficerController.logout);

router.post("/officerProfile",governmentOfficerController.postofficerProfile);
router.post("/profile/edit",governmentOfficerController.posteditofficerProfilepost);
router.post("/officerDashboard",governmentOfficerController.postdashboard);
router.post("/summaries",governmentOfficerController.postsummaries);
router.post("/commentCluster",governmentOfficerController.postclusters);
router.post("/officerManagement",governmentOfficerController.postOfficermanagement);
router.post("/logout",governmentOfficerController.postlogout);

module.exports = router;