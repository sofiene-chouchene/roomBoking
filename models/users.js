const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const usersChema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  passwordConferme: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: String,
    default: false,
  },
});
// usersChema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next;
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });
usersChema.methods.matchPassword = async function (entrePassword) {
  return await bcrypt.compare(entrePassword, this.password);
};
const userModel = mongoose.model("users", usersChema);
module.exports = userModel;
