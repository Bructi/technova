const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  role: {
    type: String,
    enum: ["devotee", "admin", "police", "medical"],
    default: "devotee",
  },
  isPriority: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
