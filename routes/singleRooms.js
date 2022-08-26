const express = require("express");
const { object } = require("webidl-conversions");
const router = express.Router();
const room = require("../models/rooms");

router.get("/roomes/:id", async (req, res) => {
  var id = req.params.id;
  try {
    const singleRooms = await room.find({
      _id: id,
    });

    return res.status(200).json(singleRooms);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
module.exports = router;
