const express = require("express");
const router = express.Router();

// homepage route
router.get("/", (req, res) => {
  res.send(`<h1>Welcome to the E-Commerce API!</h1>`)
})

module.exports = router;