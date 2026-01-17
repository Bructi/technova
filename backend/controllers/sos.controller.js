const SOS = require("../models/SOS");

exports.createSOS = async (req, res) => {
  try {
    const sos = await SOS.create(req.body);

    res.status(201).json({
      message: "SOS alert created",
      sos,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getActiveSOS = async (req, res) => {
  try {
    const sosList = await SOS.find({ status: "open" }).populate("userId");

    res.json(sosList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};