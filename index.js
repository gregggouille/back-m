const express = require("express");
const mongoose = require("mongoose");
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();
app.use(formidable());
app.use(cors());
mongoose.connect("mongodb://localhost/parking2R", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const user = require("./routes/user");
app.use(user);
const parking2R = require("./routes/parking2R");
app.use(parking2R);

app.get("/", (req, res) => {
  res.json("server started");
});
app.listen(process.env.PORT || 3005, () => {
  console.log("server started");
});
