const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

// All recommended cart routes
router.get("/:userId", cartController.getAllCart);
router.post("/:userId", cartController.addCart);

module.exports = router;