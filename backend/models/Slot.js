const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  date: {
    type: String, // "2026-01-20"
    required: true,
  },

  timeRange: {
    type: String, // "6AM-8AM"
    required: true,
  },

  maxCapacity: {
    type: Number,
    required: true,
  },

  bookedCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Slot", slotSchema);
