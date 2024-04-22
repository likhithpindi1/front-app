let mongoose = require("mongoose");
require("../db/connection");
let { isEmail } = require("validator");
let bcrybt = require("bcrypt");

let userShema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: [true, "Please enter email id"],
    validator: [isEmail, "Plese enter vaild email id "],
  },
  password: {
    type: String,
    require: [true, "Please enter password"],
  },
});

userShema.pre("save", async function (next) {
  //   let addSalt = await bcrybt.genSalt(8);
  //   let password = bcrybt.hash(password, addSalt);
  next();
});

let signUpModel = new mongoose.model("signup", userShema);

module.exports = signUpModel;
