const mongoose = require("mongoose");
const { Schema } = mongoose;

const citizenSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  idProof: {
    type: String,
    required: true // path or URL to uploaded proof
  },
  citizenId: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  securityQuestion: {
    type: String,
    required: true
  },
  securityAnswer: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["citizen", "admin", "policymaker"],
    required: true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  isMobileVerified: {
    type: Boolean,
    default: false
  },
  resetToken: String,
  resetTokenExpiry: Date,
  date: {
    type: Date,
    default: Date.now
  }
});

const citizen = mongoose.model("citizen", citizenSchema);
module.exports = citizen;
