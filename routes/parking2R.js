const express = require("express");
const router = express.Router();

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
