const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pocketbase/pb_data/data.db")
);
const router = express.Router();

router.get("/", (req, res) => {
  db.all("SELECT * FROM wine_tasting", (err, rows) => {
    if (err) {
      console.log("Error running sql:" + err);
      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }
    res.json({
      message: "list of wine tastings",
      // data: the data from the database
      data: rows,
    });
  });
});

router.post("/", (req, res) => {
  const { participant, note, rating, wine_night_id, wine_id } = req.body;

  db.run(
    "INSERT INTO wine_tasting (participant, note, rating, wine_night_id, wine_id) VALUES (?, ?, ?, ?, ?)",
    [participant, note, rating, wine_night_id, wine_id],
    function cb(err) {
      if (err) {
        console.log(`Error running sql: ${err}`);

        res.status(500);
        res.json({
          message: "Internal Server Error",
        });
      }

      res.json({
        message: `wine tasting ${this.lastID} added`,
      });
    }
  );
});

// /all winetastings for  one wine night/
router.get("/wine-tasting", (req, res) => {
  const { wine_night_id } = req.query;
  db.all(
    "SELECT * FROM wine_tasting WHERE wine_night_id = ?",
    [wine_night_id],
    (err, rows) => {
      if (err) {
        console.log("Error running sql:" + err);
        res.status(500);
        res.json({
          message: "Internal Server Error",
        });
      }
      res.json({
        message: "list of wine tastings",
        // data: the data from the database
        data: rows,
      });
    }
  );
});

module.exports = router;
