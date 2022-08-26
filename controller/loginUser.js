const User = require("../models/users");
const asyncHandler = require("express-async-handler");
const genratToken = require("../util/genrateToken");
const authuser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const pass = await User.findOne({ password });

  if (user && pass) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genratToken(user._id),
    });
  } else {
    res.status(400);
    throw new error("Invalid Email or password ");
  }
});

module.exports = { authuser };
