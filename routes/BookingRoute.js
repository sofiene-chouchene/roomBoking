const express = require("express");
const router = express.Router();
const roomse = require("../models/rooms");
const bookingModel = require("../models/Booking");
const moment = require("moment");
const stripe = require("stripe")(
  "sk_test_51LagtOJEpiRCqbcW0leook6MYzhzIikOZcAZ1oTQuBhAbnLGBBbmmRtMHs134L7N86V1veJOumZRaP5tv7bxubpt00fAiVj3ct"
);
const { v4: uuidv4 } = require("uuid");

router.post(
  "/booking",
  async (req, res) => {
    const data = req.body;

    try {
      // const custmer = await stripe.custmers.create({
      //   email: data.token.email,
      //   source: data.source.id,
      // });

      // const payment = await stripe.charges.create(
      //   {
      //     amount: data.rooms.rentperday,
      //     custmer: custmer.id,
      //     currency: "usd",
      //     receipt_email: data.token.email,
      //   },

      //   {
      //     idempotencykey: uuidv4(),
      //   }
      // );
      // if (payment) {
      //   try {
      const newBooking = new bookingModel({
        room: data.rooms,
        userId: data.userid,
        amoount: data.rooms.rentperday,
        transactionId: "1234555",
        fromDate: data.firstDate,
        toDate: data.lastDate,
      });
      const booking = await newBooking.save();
      res.send("booking send seccusifly").status(200);
    } catch (error) {
      res.status(400).send(error);
    }
    // res.send("payment secsufilyy ");
  }
  // } catch (error) {
  //   res.status(405).json({ error });
  // }
);

module.exports = router;
