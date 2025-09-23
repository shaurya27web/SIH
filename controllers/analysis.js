// controllers/analysis.js
const Analysis = require("../models/analysis"); 

// GET Controllers
module.exports.stats = async (req, res) => {
  try {
    const data = [
      { type: "Water", count: 10 },
      { type: "Electricity", count: 5 },
      { type: "Maintenance", count: 8 },
    ];
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error fetching stats:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.report = async (req, res) => {
  try {
    const report = {
      totalComplaints: 23,
      mostCommonIssue: "Water",
      resolved: 15,
      unresolved: 8,
    };
    res.status(200).json({ success: true, report });
  } catch (err) {
    console.error("Error fetching report:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.heat = async (req, res) => {
  try {
    const heatmapData = [
      { lat: 28.6139, lng: 77.2090, count: 5 },
      { lat: 28.7041, lng: 77.1025, count: 3 },
    ];
    res.status(200).json({ success: true, heatmapData });
  } catch (err) {
    console.error("Error fetching heatmap data:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.graph = async (req, res) => {
  try {
    const graphData = [
      { month: "Jan", complaints: 5 },
      { month: "Feb", complaints: 10 },
      { month: "Mar", complaints: 3 },
    ];
    res.status(200).json({ success: true, graphData });
  } catch (err) {
    console.error("Error fetching graph data:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


module.exports.postStats = async (req, res) => {
  try {
    const { type, count } = req.body;
    res.status(201).json({ success: true, message: "Stats saved", type, count });
  } catch (err) {
    console.error("Error saving stats:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.postReport = async (req, res) => {
  try {
    const { reportData } = req.body;
    res.status(201).json({ success: true, message: "Report saved", reportData });
  } catch (err) {
    console.error("Error saving report:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.postHeat = async (req, res) => {
  try {
    const { lat, lng, count } = req.body;
    // Save to DB
    res.status(201).json({ success: true, message: "Heatmap data saved", lat, lng, count });
  } catch (err) {
    console.error("Error saving heatmap data:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.postGraph = async (req, res) => {
  try {
    const { month, complaints } = req.body;
    // Save to DB
    res.status(201).json({ success: true, message: "Graph data saved", month, complaints });
  } catch (err) {
    console.error("Error saving graph data:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
