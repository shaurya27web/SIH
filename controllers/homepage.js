const GovernmentOfficer=require("../models/citizen");
const Regulator=require("../models/citizen");
const Citizen=require("../models/citizen");

module.exports.regulator=async(req,res)=>{
     try {
    
    res.status(200).json({ success: true, message: "regulator data" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching officer profile", error: err.message });
  }
};

module.exports.GovernmentOfficer=async(req,res)=>{
     try {
    
    res.status(200).json({ success: true, message: "Officer profile data" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching officer profile", error: err.message });
  }
};

module.exports.Citizen=async(req,res)=>{
        try {
    
    res.status(200).json({ success: true, message: "Officer profile data" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching officer profile", error: err.message });
  }
}