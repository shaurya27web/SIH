// controllers/regulator.js
const User = require("../models/user"); 
const Complaint = require("../models/Complaint");
const AuditLog = require("../models/auditLog");

module.exports.profile = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Regulator profile data" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading profile", error: err.message });
  }
};

module.exports.dashboard = async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();
    const pendingComplaints = await Complaint.countDocuments({ status: "pending" });

    res.status(200).json({
      success: true,
      message: "Regulator Dashboard",
      data: { totalComplaints, pendingComplaints },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading dashboard", error: err.message });
  }
};

module.exports.management = async (req, res) => {
  try {
    const officers = await User.find({ role: "officer" });
    res.status(200).json({
      success: true,
      message: "Regulator Management Page",
      data: officers,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading management", error: err.message });
  }
};

module.exports.monitoring = async (req, res) => {
  try {
    const flaggedComplaints = await Complaint.find({ flagged: true });
    res.status(200).json({
      success: true,
      message: "Regulator Monitoring Page",
      data: flaggedComplaints,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading monitoring data", error: err.message });
  }
};

module.exports.report = async (req, res) => {
  try {
    const complaintStats = {
      resolved: await Complaint.countDocuments({ status: "resolved" }),
      rejected: await Complaint.countDocuments({ status: "rejected" }),
    };
    res.status(200).json({
      success: true,
      message: "Regulator Report Page",
      data: complaintStats,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading report data", error: err.message });
  }
};

module.exports.audit = async (req, res) => {
  try {
    const logs = await AuditLog.find().sort({ createdAt: -1 }).limit(20);
    res.status(200).json({
      success: true,
      message: "Regulator Audit Logs",
      data: logs,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading audit logs", error: err.message });
  }
};



module.exports.postdashboard = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Dashboard filters applied", data: req.body });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error applying dashboard filter", error: err.message });
  }
};

module.exports.postmanagement = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Management action applied", data: req.body });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error updating management data", error: err.message });
  }
};

module.exports.postregulatormonitoring = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Monitoring action applied", data: req.body });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error applying monitoring action", error: err.message });
  }
};

module.exports.postreport = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Report generated", filters: req.body });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error generating report", error: err.message });
  }
};

module.exports.postaudit = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Audit logs filtered", filters: req.body });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error filtering audit logs", error: err.message });
  }
};


module.exports.logout = async (req, res) => {
  try {
    req.logout(() => {
      res.status(200).json({ success: true, message: "Logged out successfully" });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Logout failed", error: err.message });
  }
};

module.exports.postlogout = module.exports.logout; 
