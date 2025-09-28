const Joi = require("joi");

// Citizen schema
module.exports.citizenSchema = Joi.object({
  name: Joi.string().required(),
  mobile: Joi.string().pattern(/^[0-9]{10}$/).required(),
  dob: Joi.date().required(),
  address: Joi.string().required(),
  idProof: Joi.string().required(),
  citizenId: Joi.string().required(),
  securityQuestion: Joi.string().required(),
  securityAnswer: Joi.string().required(),
  role: Joi.string().valid("citizen", "governmentOfficer", "regulator", "admin").required(),
  isEmailVerified: Joi.boolean().default(false),
  isMobileVerified: Joi.boolean().default(false),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
}).required();

// Complaint schema
module.exports.complaintSchema = Joi.object({
  citizen: Joi.string().required(),   // citizenId
  text: Joi.string().required()
}).required();

// Auth schema (register/login)
module.exports.authSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
}).required();

// Officer schema (profile updates)
module.exports.officerSchema = Joi.object({
  name: Joi.string().required(),
  department: Joi.string().required(),
  designation: Joi.string().required(),
  email: Joi.string().email().required()
}).required();

// Regulator schema (reporting/auditing)
module.exports.regulatorSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  createdAt: Joi.date().default(Date.now)
}).required();
