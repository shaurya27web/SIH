
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const flash=require("flash");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());         

// Routes
const authRoutes = require("./routes/auth");
const complaintRoutes = require("./routes/complaints");
const analysisRoutes = require("./routes/analysis");

// app.use("/api/auth", authRoutes);
// app.use("/api/complaints", complaintRoutes);
// app.use("/api/analysis", analysisRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Complaints";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("onnection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send(" Complaint Analysis Backend is running!");
});

// server starting route
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
