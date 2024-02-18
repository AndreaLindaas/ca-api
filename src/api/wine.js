const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pocketbase/pb_data/data.db")
);

const router = express.Router();
router.get("/", (req, res) => {
  db.all("SELECT * FROM wine", (err, rows) => {
    if (err) {
      console.log("Error running sql:" + err);
      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }
    res.json({
      message: "list of wines",
      // data: the data from the database
      data: rows,
    });
  });
});

router.post("/", (req, res) => {
  const { name, type, year, country } = req.body;

  db.run(
    "INSERT INTO wine ( name, type, year, country) VALUES (?, ?, ?, ?)",
    [name, type, year, country],
    function cb(err) {
      if (err) {
        console.log(`Error running sql: ${err}`);

        res.status(500);
        res.json({
          message: "Internal Server Error ",
        });
      }

      res.json({
        message: `${name} added`,
      });
    }
  );
});

router.delete("/", (req, res) => {
  const { id } = req.body;

  db.run("DELETE FROM wine WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(`Error running sql: ${err}`);

      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }

    res.json({
      message: `product ${id} deleted`,
    });
  });
});

module.exports = router;
