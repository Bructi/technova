const Slot = require("../models/Slot");
const Zone = require("../models/Zone");
const Booking = require("../models/Booking");

exports.getDashboard = async (req, res) => {
  try {
    const slots = await Slot.find();
    const zones = await Zone.find();
    const totalBookings = await Booking.countDocuments();

    res.json({
      slots,
      zones,
      totalBookings,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};