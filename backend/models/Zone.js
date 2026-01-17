const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  currentCount: {
    type: Number,
    default: 0,
  },

  maxAllowed: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Zone", zoneSchema);
