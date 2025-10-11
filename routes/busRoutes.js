const express = require("express");
const busController = require("../controllers/busController");
const router = express.Router();

router.post("/", busController.addUser);
router.get("/available/:seats", busController.getUsers);

module.exports = router;