let express = require("express");

let route = express.Router();
let signUpModel = require("../models/signup");

console.log(signUpModel);

route.get("/api", (req, res) => {
  res.send("routing");
});

route.post("/signup", async (req, res) => {
  signUpModel = signUpModel(req.body);
  signUpModel.save();
  res.status(200).json(signUpModel);
});

module.exports = route;
