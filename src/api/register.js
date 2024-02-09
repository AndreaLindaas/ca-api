const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pocketbase/pb_data/data.db")
);

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["😀", "register", "🙄"]);
});

// router.post("/products", (req, res) => {
//   const { name, price } = req.body;

//   db.run(
//     "INSERT INTO products (username, email, name) VALUES (?, ?, ?)",
//     [name, price],
//     function cb(err) {
//       if (err) {
//         console.log(`Error running sql: ${err}`);

//         res.status(500);
//         res.json({
//           message: "Internal Server Error",
//         });
//       }

//       res.json({
//         message: `product ${this.lastID} added`,
//       });
//     }
//   );
// });

module.exports = router;
