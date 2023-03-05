const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  startTime: { type: Date },
  endTime: { type: Date },
  sleepingHours: Number,
});

module.exports = mongoose.model("sleepings", schema);
