const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pocketbase/pb_data/data.db")
);

const router = express.Router();

router.get("/", (req, res) => {
  db.all("SELECT * FROM wine_night", (err, rows) => {
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
  const { participants, location, date } = req.body;

  db.run(
    "INSERT INTO wine_night (participants, location, date) VALUES (?, ?, ?)",
    [participants, location, date],
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

// sletter i postman men ikke i pocketbase

router.delete("/", (req, res) => {
  const { id } = req.body;

  db.run("DELETE FROM wine_night WHERE id = ?", [id], function cb(err) {
    if (err) {
      console.log(`Error running sql: ${err}`);

      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }

    res.json({
      message: `wine night ${id} deleted`,
    });
  });
});

/***** Get MY wine nights */
router.get("/me", (req, res) => {
  const { participant } = req.query;

  db.all(
    "SELECT * FROM wine_night WHERE participants LIKE ?",
    [`%${participant}%`],
    (err, rows) => {
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
    }
  );
});

/***** Get MY wine night with id */
router.get("/wine-night", (req, res) => {
  const { id } = req.query;
  db.all("SELECT * FROM wine_night WHERE id = ?", [id], (err, rows) => {
    if (err) {
      console.log("Error running sql:" + err);
      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }
    res.json({
      message: "wine night",
      // data: the data from the database
      data: rows,
    });
  });
});

module.exports = router;
