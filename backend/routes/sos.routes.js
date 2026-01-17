const express = require("express");
const {
  createSOS,
  getActiveSOS,
} = require("../controllers/sos.controller");

const router = express.Router();

router.post("/create", createSOS);
router.get("/active", getActiveSOS);

module.exports = router;