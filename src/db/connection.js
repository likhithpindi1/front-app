let mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/app")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });
