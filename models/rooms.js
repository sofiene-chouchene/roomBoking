const { ObjectID, ObjectId } = require("bson");
const mongoose = require("mongoose");
const roomschema = mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
    },
    _id: {
      type: ObjectId,
      require: true,
    },
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
