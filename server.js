// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const flash = require("flash");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(flash());

const authRoutes = require("./routes/auth");
const complaintRoutes = require("./routes/complaints");
const analysisRoutes = require("./routes/analysis");
const citizenRoutes = require("./routes/citizen");
const dashboardRoutes = require("./routes/dashboard");
const governmentOfficerRoutes = require("./routes/governmentOfficer");
const regulatorRoutes = require("./routes/regulator");
const homepageRoutes = require("./routes/homepage");


app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/citizens", citizenRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/government-officer", governmentOfficerRoutes);
app.use("/api/regulator", regulatorRoutes);
app.use("/api/homepage", homepageRoutes);


const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Complaints";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));

app.get("/", (req, res) => {
  res.send(" Complaint Analysis Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
