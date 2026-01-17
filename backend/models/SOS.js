const mongoose = require("mongoose");

const sosSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  location: {
    type: String, // zone name or GPS text
    required: true,
  },

  type: {
    type: String,
    enum: ["medical", "security"],
    required: true,
  },

  status: {
    type: String,
    enum: ["open", "resolved"],
    default: "open",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SOS", sosSchema);
