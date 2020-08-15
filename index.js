const express = require("express");
const mongoose = require("mongoose");
// const cloudinary = require("cloudinary").v2;
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();
app.use(formidable());
app.use(cors());
require("dotenv").config();
//import routes
const userRoutes = require("./routes/user");
app.use(userRoutes);
const parking2RRoutes = require("./routes/parking2R");
app.use(parking2RRoutes);
//BDD
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", (req, res) => {
  res.json("server started");
});
app.listen(process.env.PORT || 3005, () => {
  console.log("server started");
});
