const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pocketbase/pb_data/data.db")
);

const emojis = require("./emojis");
const register = require("./register");
const wineNight = require("./wine-night");
const wineTasting = require("./wine-tasting");
const wine = require("./wine");
const router = express.Router();

router.use("/emojis", emojis);
router.use("/register", register);
router.use("/wine-night", wineNight);
router.use("/wine-tasting", wineTasting);
router.use("/wine", wine);

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

module.exports = router;
