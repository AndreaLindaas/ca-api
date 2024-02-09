const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["😀", "Tasting", "🙄"]);
});

module.exports = router;
