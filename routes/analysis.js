const express=require("express");
const router=express.Router({mergeParams:true});
const {userschema}=require("../schema");
const { isLoggedIn } = require("../middleware");

const analysisController=require("../controllers/analysis");



router.get("/complaint-stats",analysisController.stats);
router.get("/trend-report",analysisController.report);
router.get("/heatmap-data",analysisController.heat);
router.get("/graph",analysisController.graph);

router.post("/complaint-stats",analysisController.postStats);
router.post("/trend-report",analysisController.postReport);
router.post("/heatmap-data",analysisController.postHeat);
router.post("/graph",analysisController.postGraph);

module.exports = router;