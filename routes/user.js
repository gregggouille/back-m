const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
// Import du mode User
const User = require("../models/User");
//
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.get("/user", (req, res) => {
  res.json({ message: "user" });
});
router.post("/user/signup", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.fields.email });

    if (user) {
      res.json({ message: "This email already has an account" });
    } else {
      if (req.fields.email && req.fields.password && req.fields.username) {
        // Générer le token et encrypter le mot de passe
        const token = uid2(64);
        const salt = uid2(64);
        const hash = SHA256(req.fields.password + salt).toString(encBase64);
        //creation d'un user
        const result = await cloudinary.uploader.upload(req.files.picture.path);
        const newUser = new User({
          picture: result,
          username: req.fields.username,
          email: req.fields.email,
          description: req.fields.description,
          token: token,
          hash: hash,
          salt: salt,
        });

        await newUser.save();
        res.status(200).json({
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          description: req.fields.description,
          token: newUser.token,
          picture: newUser.picture,
        });
      } else {
        res.status(400).json({ message: "Missing parameters" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.fields.email });
    console.log(user);

    if (user) {
      // Est-ce qu'il a rentré le bon mot de passe ?
      // req.fields.password
      // user.hash
      // user.salt
      if (
        SHA256(req.fields.password + user.salt).toString(encBase64) ===
        user.hash
      ) {
        res.status(200).json({
          _id: user._id,
          token: user.token,
          username: user.username,
        });
      } else {
        res.status(401).json({ error: "Unauthorized" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

module.exports = router;
