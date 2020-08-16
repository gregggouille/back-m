const express = require("express");
const router = express.Router();
// Import du mode User
const Notification = require("../models/Notification");
//
router.get("/notification", async (req, res) => {
  try {
    const notification = await Notification.find(req.query);
    res.json(notification);
  } catch (error) {
    console.log(error.message);
  }
  res.json({ message: "user" });
});
router.post("/notification/push", async (req,res)=>{
  try {
    
  } catch (error) {
    console.log(error.message);
  }
})
module.exports = router;
