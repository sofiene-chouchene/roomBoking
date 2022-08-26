const User = require("../models/users");
const asyncHandler = require("express-async-handler");
const genratToken = require("../util/genrateToken");
const registreUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("user Alredy exist");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: genratToken(user._id),
    });
  } else {
    res.status(400);
    throw new error("erro");
  }
});

module.exports = { registreUser };
