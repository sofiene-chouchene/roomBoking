const express = require("express");
const { authuser } = require("../controller/loginUser");
const router = express.Router();

router.route("/login").post(authuser);

module.exports = router;
