const User=require("./models/User");
const Complaint=require("./models/Complaint");
const AuditSchema=require("./models/auditLog");

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("failure","You must be logged in");
        return res.redirect("./login");
    };
    next();
}

//for editing the complaints
module.exports.isComplaintAuthor=async (req,res,next)=>{
    let {id,ComplaintID}=req.params;
    let complaint= await Complaint.findById(ComplaintID);
    if (!complaint.author.equals(res.locals.currUser._id)){
        req.flash("error","Access Denied")
         return res.redirect("/userDashboard")
    }
    next();
};

//for searching,deleting
module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;

    let complaint=complaint.findById(id);
    if(!complaint){
        req.flash("error","sorry complaint not found")
        return res.redirect("/complaintDashboard")
    }
    if(!complaint.owner.equals(req.user._id)){
        req.flash("error","Access Denied");
        return res.redirect("/complaintDashboard");
    };
    next();
}

//middleware for role based access

module.exports.isEligible=async(req,res,next)=>{
    if(!role.includes(res.locals.currUser.role)){
        req.flash("error","Access Denied");
        res.redirect("/dashboard");
    };
    next();
}