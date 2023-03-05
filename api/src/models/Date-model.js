const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  date: {
    type: Array,
  },
});

module.exports = mongoose.model("Dates", schema);
