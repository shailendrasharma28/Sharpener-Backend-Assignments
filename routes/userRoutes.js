const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// All recommended users routes
router.get("/", userController.getAllUsers);
router.post("/", userController.addUser);
router.get("/:id", userController.getUserById);

module.exports = router;