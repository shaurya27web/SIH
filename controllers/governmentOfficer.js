
const Officer = require("../models/citizen"); 
const Complaint = require("../models/Complaint");

module.exports.officerProfile = async (req, res) => {
  try {
    
    res.status(200).json({ success: true, message: "Officer profile data" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching officer profile", error: err.message });
  }
};

module.exports.postofficerProfile = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Officer profile updated successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error updating profile", error: err.message });
  }
};

module.exports.editofficerProfile = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Render edit officer profile page" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading edit profile page", error: err.message });
  }
};

module.exports.posteditofficerProfilepost = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Officer profile edit saved" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error saving profile edit", error: err.message });
  }
};

module.exports.dashboard = async (req, res) => {
  try {
    const assignedComplaints = await Complaint.find({ assignedTo: req.citizen._id });
    res.status(200).json({
      success: true,
      message: "Officer dashboard data",
      data: { assignedComplaints }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading dashboard", error: err.message });
  }
};

module.exports.postdashboard = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Dashboard data updated" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error processing dashboard data", error: err.message });
  }
};

module.exports.summaries = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Complaint summaries data" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching summaries", error: err.message });
  }
};

module.exports.postsummaries = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Filtered summaries returned" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error fetching filtered summaries", error: err.message });
  }
};

module.exports.clusters = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Comment clusters data" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching clusters", error: err.message });
  }
};

module.exports.postclusters = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Clusters updated successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error updating clusters", error: err.message });
  }
};

module.exports.management = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Officer management data" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading officer management", error: err.message });
  }
};

module.exports.postOfficermanagement = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Officer management action processed" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error performing officer management action", error: err.message });
  }
};

module.exports.logout = async (req, res) => {
  try {
    req.logout(() => {
      res.status(200).json({ success: true, message: "Officer logged out" });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error logging out", error: err.message });
  }
};

module.exports.postlogout = async (req, res) => {
  try {
    req.logout(() => {
      res.status(200).json({ success: true, message: "Officer logged out (POST)" });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error logging out", error: err.message });
  }
};
