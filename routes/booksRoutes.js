const express = require("express");
const router = express.Router();

// All recommended  Books routes
router.get("/", (req, res) => {
  res.send(`<h1>Here is the list of books!</h1>`)
})
router.post("/", (req, res) => {
  res.send(`<h1>Book has been added!</h1>`)
})

module.exports = router;