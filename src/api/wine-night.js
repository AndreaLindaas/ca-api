const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pocketbase/pb_data/data.db")
);

const router = express.Router();

router.get("/", (req, res) => {
  db.all("SELECT * FROM wine_nights", (err, rows) => {
    if (err) {
      console.log("Error running sql:" + err);
      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }
    res.json({
      message: "list of wine nights",
      // data: the data from the database
      data: rows,
    });
  });
});

router.post("/", (req, res) => {
  const { participants, place, date } = req.body;

  db.run(
    "INSERT INTO wine_nights (participants, place, date) VALUES (?, ?, ?)",
    [participants, place, date],
    function cb(err) {
      if (err) {
        console.log(`Error running sql: ${err}`);

        res.status(500);
        res.json({
          message: "Internal Server Error",
        });
      }

      res.json({
        message: `wine night ${this.lastID} added`,
      });
    }
  );
});

module.exports = router;
