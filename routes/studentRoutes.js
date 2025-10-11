const express = require("express");
const userController = require("../controllers/studentController");
const router = express.Router();

router.post("/", userController.addUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;