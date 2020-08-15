const mongoose = require("mongoose");

const User = mongoose.model("User", {
  picture: Object,
  username: String,
  email: String,
  description: String,
  salt: String,
  hash: String,
  token: String,
});
module.exports = User;
