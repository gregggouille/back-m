const express = require("express");
const router = express.Router();
// Import du mode User
const Notification = require("../models/Notification");
//
router.get("/notification", async (req, res) => {
  try {
    const notification = await Notification.find();
    console.log(notification);
    res.json(notification);
  } catch (error) {
    console.log(error.message);
  }
  res.json({ message: "user" });
});
router.post("/notification/push", async (req,res)=>{
  try {
    const newNotification = new Notification({
      
      title: req.fields.title, 
      description: req.fields.description,
      rating: req.fields.rating,
      })
      console.log(newNotification);
      await newNotification.save();
    res.json("newNotification");
  } catch (error) {
    console.log(error.message);
  }
})
module.exports = router;
