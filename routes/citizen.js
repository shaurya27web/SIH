const express=require("express");
const router=express.Router({mergeParams:true});
const {citizenschema}=require("../schema");
const citizenController=require("../controllers/citizen");
const { isLoggedIn } = require("../middleware"); 

const validatecitizen=(req,res,next)=>{
    const {error}=citizenschema.validate(req.body);
    if(error){
        req.flash("error",error.details.map(el=>el.message)).join(",");
    return (res.redirect("/homepage"));
    }
    else{
        next();
    }
}

router.get("/profile/edit",validatecitizen,citizenController.editProfile);
router.get("/change-password",validatecitizen,citizenController.changePassword);
router.get("/notifications/read/:id",isLoggedIn,citizenController.notificationsRead);

router.post("/profile/edit",validatecitizen,citizenController.posteditProfile);
router.post("/change-password",validatecitizen,citizenController.postchangePassword);
router.post("/notifications/read/:id",isLoggedIn,citizenController.postnotificationsRead);


router.get("/citizen/logout",citizenController.logout)
router.post("/citizen/logout",citizenController.postlogout)

router.get("/complaints",validatecitizen,citizenController.postComlaints);
router.get(":id/acknowledgement",userController.acknowledgement);

router.post("/complaints",validatecitizen,citizenController.postComlaints);
router.post(":id/acknowledgement",userController.acknowledgement);

router.get("/complaints/track",isLoggedIn,citizenController.complaintsTrack);
router.get("/complaints/:id",isLoggedIn,citizenController.complaintsEdit);

router.post("/complaints/track",isLoggedIn,citizenController.complaintsTrack);
router.post("/complaints/:id",isLoggedIn,citizenController.complaintsEdit);

router.get("/upVote",citizenController.upvote);
router.post("/upVote",citizenController.upvote);

router.delete("/account/delete",validatecitizen,citizenController.deleteAccount);