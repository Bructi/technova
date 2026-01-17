const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Slot",
    required: true,
  },

  zone: {
    type: String, // "Main Temple", "Darshan Hall"
    required: true,
  },

  qrCode: {
    type: String, // will store QR data / URL later
  },

  status: {
    type: String,
    enum: ["active", "used", "cancelled"],
    default: "active",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
