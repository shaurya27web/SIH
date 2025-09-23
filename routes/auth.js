const express=require("express");
const router=express.Router({mergeParams:true});
const {authschema}=require("../schema");

const authController=require("../controllers/auth");

const validateauth=(req,res,next)=>{
   const {error}=authschema.validate(req.body);
   if(error){
    req.flash("error",error.details.map(el=>el.message));
    return(res.redirect("./register"))
   }
   else{
    next();
   }
}

router.get("/register",authController.register);
router.get("/login",authController.login);
router.get("/officer-login",authController.officerLogin);
router.get("/admin-login",authController.adminLogin);
router.get("/forgot-password",authController.forgotPassword);
router.get("/reset-password",authController.resetPassword);


router.post("/register",validateauth,authController.postRegister);

router.post("/login",
    saveRedirectUrl,
    passport.authenticate('local', { failureRedirect: '/login',
         failureFlash: true }),authController.postLogin);

router.post("/officer-login",validateauth,saveRedirectUrl,
    passport.authenticate('local', { failureRedirect: '/officer-login',
         failureFlash: true }),authController.postOfficerLogin);


router.post("/admin-login",validateauth,saveRedirectUrl,
    passport.authenticate('local', { failureRedirect: '/officer-login',
         failureFlash: true }),authController.postAdminLogin);


router.post("/verify-mobile", authController.verifyMobile);
router.post("/verify-email", authController.verifyEmail);


router.post("/forgot-password/email", authController.forgotPasswordEmail);
router.post("/forgot-password/sms", authController.forgotPasswordSMS);
router.post("/reset-password/:token", authController.resetPasswordSubmit);

router.post("/logout", authController.logout);

module.exports = router;