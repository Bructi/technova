const express = require("express");
const { bookSlot } = require("../controllers/booking.controller");

const router = express.Router();

router.post("/book", bookSlot);

module.exports = router;