const dbconfig = require("./db");
const express = require("express");
const app = express();
const roomsrout = require("./routes/roomRouter");

app.use("/api/rooms", roomsrout);

const port = process.env.port || 5000;
app.listen(port, () => console.log("server login"));
