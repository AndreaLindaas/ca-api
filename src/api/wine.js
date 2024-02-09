const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["😀", "Wine", "<3"]);
});

module.exports = router;
