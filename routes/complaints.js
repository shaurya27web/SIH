const express=require("express");
const router=express.Router({mergeParams:true});
const {complaintschema}=require("../schema");
const { isLoggedIn } = require("../middleware");

const complaintController=require("../controllers/complaint")
const validateComplaint=(req,res,next)=>{
    const {error}=complaintschema.validate(req.body);
    if(error){
        req.flash("error",error.details.map(el=>el.message)).join(",");
        return res.redirect("/complaints")
    }
    else{
        next();
    }
}

router.get("/create",isLoggedIn,complaintController.create);
router.put("/:id",complaintController.viewComplaint);
router.get("/:id",complaintController.editComplaint);
router.get("user/:id",isLoggedIn,complaintController.allComplaintUser);
router.get("/all",isLoggedIn,complaintController.allComplaintAdmin);

router.post("/create",validateComplaint,complaintController.postCreate);
router.post("/:id",complaintController.viewPost);
router.post(":/id",complaintController.editPost);
router.post("user/:id",complaintController.allComplaintUserPost);
router.post("/all",complaintController.allComplaintAdminPost);


