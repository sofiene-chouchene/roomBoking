const mongoose = require("mongoose");

var mongoUrl =
  "mongodb+srv://sofiene:74Kev4Qh@cluster0.5ni3ltr.mongodb.net/sheyrooms";

mongoose.connect(mongoUrl, { useUnifiedtopology: true, useNewUrlParser: true });
var connection = mongoose.connection;

connection.on("connected", () => {
  console.log("connected to db");
});
connection.on("error", () => {
  console.log("erroor conection db ");
});

module.export = mongoose;
