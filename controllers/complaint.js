
const Complaint = require("../models/Complaint"); 


module.exports.create = async (req, res) => {
  try {
    res.json({ success: true, message: "Render complaint creation form" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading complaint form" });
  }
};

module.exports.viewComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });

    res.json({ success: true, complaint });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching complaint" });
  }
};


module.exports.editComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });

    res.json({ success: true, message: "Render complaint edit form", complaint });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading edit complaint page" });
  }
};


module.exports.allComplaintUser = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.params.id });
    res.json({ success: true, complaints });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching user complaints" });
  }
};


module.exports.allComplaintAdmin = async (req, res) => {
  try {
    const complaints = await Complaint.find({});
    res.json({ success: true, complaints });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching all complaints" });
  }
};


module.exports.postCreate = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    complaint.user = req.user._id; 
    await complaint.save();

    res.status(201).json({ success: true, message: "Complaint created successfully", complaint });
  } catch (err) {
    res.status(400).json({ success: false, message: "Failed to create complaint", error: err.message });
  }
};


module.exports.viewPost = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });

    
    res.json({ success: true, message: "Post-action view on complaint", complaint });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error in complaint post view" });
  }
};


module.exports.editPost = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });

    res.json({ success: true, message: "Complaint updated successfully", complaint });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error updating complaint", error: err.message });
  }
};


module.exports.allComplaintUserPost = async (req, res) => {
  try {
    const { status } = req.body;
    const query = { user: req.params.id };
    if (status) query.status = status;

    const complaints = await Complaint.find(query);
    res.json({ success: true, complaints });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching filtered user complaints" });
  }
};


module.exports.allComplaintAdminPost = async (req, res) => {
  try {
    const { status } = req.body;
    const query = {};
    if (status) query.status = status;

    const complaints = await Complaint.find(query);
    res.json({ success: true, complaints });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching filtered complaints" });
  }
};
