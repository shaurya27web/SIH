const mongoose = require("mongoose");
const complaints = require("./data.js");
const Complaint = require("../models/Complaint.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Complaints";

async function initDB() {
  await mongoose.connect(MONGO_URL);

  await Complaint.deleteMany({});
  await Complaint.insertMany(complaints);

  mongoose.connection.close();
}

initDB().catch((err) => {
  console.error(err);
});
