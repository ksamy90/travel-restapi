const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET request for places");
  res.json({ message: "node application" });
});

module.exports = router;
