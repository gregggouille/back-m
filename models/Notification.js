const mongoose = require("mongoose");
const Notification = mongoose.model("Notification", {
  _id: String,
  title: String,
  description: String,
  rating: String,
});
module.exports = Notification;
