const jwt = require("jsonwebtoken");

const genratToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = genratToken;
