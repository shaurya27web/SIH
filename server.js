// server.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const flash = require("flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const cookieParser = require("cookie-parser");
const session = require("express-session");

dotenv.config();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true                 
}));


app.use(cookieParser("MySecret")); 

const sessionOptions={
    secret:"MySecret",
    resave:false,
    saveUninitialized:false,
    cookie: {
        expires: Date.now()+5*24*60*60*1000,
        maxAge:5*24*60*60*1000,
    }
}

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



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
