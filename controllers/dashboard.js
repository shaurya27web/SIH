
const Complaint = require("../models/Complaint");
// const Notification = require("../models/notification");
// const FAQ = require("../models/faq");

module.exports.getDashboardData = async (req, res) => {
  try {
  
    const openComplaints = await Complaint.countDocuments({ citizen: req.citizen._id, status: "open" });
    const resolvedComplaints = await Complaint.countDocuments({ citizen: req.citizen._id, status: "resolved" });

    res.status(200).json({
      success: true,
      message: "citizen dashboard data",
      data: { openComplaints, resolvedComplaints }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading dashboard", error: err.message });
  }
};

module.exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ citizen: req.citizen._id }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "citizen notifications fetched successfully",
      notifications
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading notifications", error: err.message });
  }
};

module.exports.getTrendingTopics = async (req, res) => {
  try {
    const trending = await Complaint.find().sort({ upvotes: -1 }).limit(5);
    res.status(200).json({
      success: true,
      message: "Trending topics fetched successfully",
      trending
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading trending topics", error: err.message });
  }
};

// module.exports.getFaqs = async (req, res) => {
//   try {
//     const faqs = await FAQ.find();
//     res.status(200).json({
//       success: true,
//       message: "FAQs fetched successfully",
//       faqs
//     });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Error loading FAQs", error: err.message });
//   }
// };
