const User = require("../models/User");
const { generateToken } = require("../config/jwt");

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = generateToken({
      id: user._id,
      role: user.role,
    });

    res.status(201).json({
      message: "User registered",
      token,
      user,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};