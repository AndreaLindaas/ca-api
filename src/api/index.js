const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pocketbase/pb_data/data.db")
);

const emojis = require("./emojis");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.get("/products", (req, res) => {
  //We need to run a sql query to get all the products
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      console.log("Error running sql:" + err);
      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }
    res.json({
      message: "list of products",
      // data: the data from the database
      data: rows,
    });
  });
});
router.use("/emojis", emojis);

module.exports = router;
