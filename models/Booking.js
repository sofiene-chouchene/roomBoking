const mongoose = require("mongoose");

const bookingschema = mongoose.Schema(
  {
    room: {
      type: Object,
      require: true,
    },
    roomId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    fromDate: {
      type: String,
      require: true,
    },
    toDate: {
      type: String,
      require: true,
    },
    totalDay: {
      type: Number,
      require: true,
    },
    amoount: {
      type: Number,
      require: true,
    },
    transactionId: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
      default: "booked",
    },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("bookings", bookingschema);

module.exports = bookingModel;
