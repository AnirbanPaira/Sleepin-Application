const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Port = 8000;
require("../api/src/db/connect");
const router = require("./src/routers/index");

const cors = require("cors");
const { Router } = require("express");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello User");
});

app.use("/api", router);
app.listen(Port, () => console.log(`Backend Server is running ${Port}`));
