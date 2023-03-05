const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/sleepingapi")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch(() => {
    console.log("Connection not Successful");
  });
