const express = require("express");
const { registreUser } = require("../controller/RegisterUser.js");
const router = express.Router();

router.route("/registre").post(registreUser);

module.exports = router;
