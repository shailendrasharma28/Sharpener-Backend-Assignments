const express = require("express");
const router = express.Router();

// All recommended cart routes
router.get("/:userId", (req, res) => {
  const {userId} = req.params;
  res.send(`<h1>Fetching cart for user with ID: ${userId}</h1>`)
})

router.post("/:userId", (req, res) => {
  const {userId} = req.params;
  res.send(`<h1>Adding product to cart for user with ID: ${userId}</h1>`);
})

module.exports = router;