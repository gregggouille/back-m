const express = require("express");
const router = express.Router();
// Import du mode User
const Parking2R = require("../models/Parking2R");
//
router.get("listeparking", (req, res) => {
  res.json({ message: "user" });
});
router.post("/ajouterparking", (req, res) => {
  res.json({ message: " user signup" });
});
// router.post("/user/login", (req, res) => {
//   res.json({ message: "user login" });
// });
module.exports = router;
