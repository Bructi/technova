const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },

  role: {
    type: String,
    enum: ["devotee", "admin", "police", "medical"],
    default: "devotee",
  },

  isPriority: {
    type: Boolean,
    default: false, // elderly, disabled, women with children
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
