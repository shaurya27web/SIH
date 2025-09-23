// controllers/authController.js
const User = require("../models/User");
const AuditLog = require("../models/auditLog");
const bcrypt = require("bcrypt"); // for password hashing
const jwt = require("jsonwebtoken"); // if using JWT for sessions



module.exports.register = async (req, res) => {
  res.status(200).json({ message: "Register route working" });
};

module.exports.login = async (req, res) => {
  res.status(200).json({ message: "Citizen login route working" });
};

module.exports.officerLogin = async (req, res) => {
  res.status(200).json({ message: "Officer login route working" });
};

module.exports.adminLogin = async (req, res) => {
  res.status(200).json({ message: "Admin login route working" });
};

module.exports.forgotPassword = async (req, res) => {
  res.status(200).json({ message: "Forgot password route working" });
};

module.exports.resetPassword = async (req, res) => {
  res.status(200).json({ message: "Reset password route working" });
};

// ============================
// POST ROUTES (Core Logic)
// ============================

module.exports.postRegister = async (req, res) => {
  try {
    // TODO: Joi validation
    const { name, email, password, mobile, role } = req.body;

    // TODO: Check for duplicate email
    // TODO: Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // TODO: Save user
    // const user = await User.create({ name, email, password: hashedPassword, mobile, role });

    // TODO: Optionally create an audit log
    // await AuditLog.create({ action: "REGISTER", performedBy: user._id });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      // user: { id: user._id, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports.postLogin = async (req, res) => {
  try {
    // TODO: Validate email & password
    // TODO: Verify user exists and password matches (bcrypt.compare)
    // TODO: Generate JWT token or set session

    res.status(200).json({
      success: true,
      message: "Citizen login successful",
      // token: token, // if using JWT
    });
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

module.exports.postOfficerLogin = async (req, res) => {
  try {
    // TODO: Verify role === "policymaker"
    res.status(200).json({ success: true, message: "Officer login successful" });
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized access" });
  }
};

module.exports.postAdminLogin = async (req, res) => {
  try {
    // TODO: Verify role === "admin"
    res.status(200).json({ success: true, message: "Admin login successful" });
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized access" });
  }
};

module.exports.verifyEmail = async (req, res) => {
  try {
    // TODO: Verify OTP sent to email
    res.status(200).json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid verification code" });
  }
};

module.exports.verifyMobile = async (req, res) => {
  try {
    // TODO: Verify OTP sent to mobile
    res.status(200).json({ success: true, message: "Mobile number verified successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid verification code" });
  }
};

module.exports.postForgotPassword = async (req, res) => {
  try {
    // TODO: Generate reset token + send via email
    res.status(200).json({ success: true, message: "Password reset link sent to email" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Could not send reset link" });
  }
};

module.exports.postResetPassword = async (req, res) => {
  try {
    // TODO: Verify token + update password (hash new password)
    res.status(200).json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports.LogOut=async()=>{
  res.redirect("/logout.ejs");
}
