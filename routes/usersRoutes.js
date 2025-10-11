const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();

router.post("/", userController.addUser);
router.get("/", userController.getUsers);
router.put("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUsers);

module.exports = router;