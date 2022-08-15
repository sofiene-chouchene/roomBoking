const mongoose = require("mongoose");
const roomschema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    maxcount: {
      type: Number,
      require: true,
    },
    phonenumber: {
      type: Number,
      require: true,
    },
    rentprady: {
      type: Number,
      require: true,
    },
    imagesurl: [],
    currentbooking: [],
    type: {
      type: String,
      require: true,
    },
    discrption: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const roomModel = mongoose.model("rooms", roomschema);

module.exports = roomModel;
