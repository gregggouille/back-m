const mongoose = require("mongoose");

const P2R = mongoose.model("Parking2R", {
  adress: String,
});
module.exports = P2R;
