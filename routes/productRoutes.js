const express = require("express");
const router = express.Router();

// All recommended product routes
router.get("/", (req, res) => {
  res.send(`<h1>Fetching all products</h1>`)
})
router.post("/", (req, res) => {
  res.send(`<h1>Adding a new product</h1>`)
})
router.get("/:id", (req, res) => {
  const {id} = req.params;
  res.send(`<h1>Fetching product with ID: ${id}</h1>`);
})

module.exports = router;