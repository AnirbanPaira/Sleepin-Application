const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    // trim: true,
  },
  email: {
    type: String,
    // trim: true,
    // lowercase: true,
  },
  phoneNo: {
    type: String,
    // trim: true,
    // lowercase: true,
  },
  Age: {
    type: Number,
    // trim: true,
  },
  password: {
    type: String,
    // trim: true,
  },
  date: {
    type: String,
    // trim: true,
    // lowercase: true,
  },
  healthStatus: {
    type: String,
    default: "none",
  },
});

module.exports = mongoose.model("Users", schema);
