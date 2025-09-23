
const Citizen = require("../models/User"); 
const Complaint = require("../models/Complaint");
// const Notification = require("../models/notification"); 


module.exports.editProfile = async (req, res) => {
  try {
    res.json({ success: true, message: "Render citizen profile edit page" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading profile edit page" });
  }
};


module.exports.posteditProfile = async (req, res) => {
  try {
    const updated = await Citizen.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true });
    res.json({ success: true, message: "Profile updated successfully", updated });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error updating profile", error: err.message });
  }
};


module.exports.changePassword = async (req, res) => {
  try {
    res.json({ success: true, message: "Render change password page" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading change password page" });
  }
};


module.exports.postchangePassword = async (req, res) => {
  try {
    const user = await Citizen.findById(req.user._id);
    await user.changePassword(req.body.oldPassword, req.body.newPassword);
    res.json({ success: true, message: "Password changed successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error changing password", error: err.message });
  }
};

// // GET -> Mark a notification as read
// module.exports.notificationsRead = async (req, res) => {
//   try {
//     const notification = await Notification.findById(req.params.id);
//     if (!notification) return res.status(404).json({ success: false, message: "Notification not found" });

//     res.json({ success: true, message: "Render notification details", notification });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Error fetching notification" });
//   }
// };

// // POST -> Mark a notification as read in DB
// module.exports.postnotificationsRead = async (req, res) => {
//   try {
//     await Notification.findByIdAndUpdate(req.params.id, { read: true });
//     res.json({ success: true, message: "Notification marked as read" });
//   } catch (err) {
//     res.status(400).json({ success: false, message: "Error updating notification status" });
//   }
// };


module.exports.logout = async (req, res) => {
  try {
    req.logout(() => {
      res.json({ success: true, message: "Logged out successfully" });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error logging out" });
  }
};


module.exports.postlogout = async (req, res) => {
  try {
    req.logout(() => {
      res.json({ success: true, message: "Logged out successfully (POST)" });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error logging out" });
  }
};


module.exports.postComplaints = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    complaint.user = req.user._id;
    await complaint.save();

    res.status(201).json({ success: true, message: "Complaint submitted successfully", complaint });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error submitting complaint", error: err.message });
  }
};


module.exports.acknowledgement = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });

    res.json({ success: true, message: "Render acknowledgement page", complaint });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching acknowledgement" });
  }
};


module.exports.complaintsTrack = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user._id });
    res.json({ success: true, message: "Tracking complaints", complaints });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error tracking complaints" });
  }
};


module.exports.complaintsEdit = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!complaint) return res.status(404).json({ success: false, message: "Complaint not found" });

    res.json({ success: true, message: "Complaint edited successfully", complaint });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error editing complaint", error: err.message });
  }
};


module.exports.upvote = async (req, res) => {
  try {
    const { complaintId } = req.body;
    const complaint = await Complaint.findByIdAndUpdate(
      complaintId,
      { $inc: { upvotes: 1 } },
      { new: true }
    );
    res.json({ success: true, message: "Upvote added", complaint });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error upvoting complaint", error: err.message });
  }
};


module.exports.deleteAccount = async (req, res) => {
  try {
    await Citizen.findByIdAndDelete(req.user._id);
    res.json({ success: true, message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting account" });
  }
};
