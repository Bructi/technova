const Slot = require("../models/Slot");
const Booking = require("../models/Booking");

exports.bookSlot = async (req, res) => {
  const { userId, slotId, zone } = req.body;

  try {
    const slot = await Slot.findById(slotId);

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" });
    }

    
    if (slot.bookedCount >= slot.maxCapacity) {
      return res.status(400).json({ message: "Slot fully booked" });
    }

    const booking = await Booking.create({
      userId,
      slotId,
      zone,
    });

    slot.bookedCount += 1;
    await slot.save();

    res.status(201).json({
      message: "Booking successful",
      booking,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};