const express = require("express");
const courseController = require("../controllers/courseController");
const router = express.Router();

router.post("/", courseController.addCourse);
router.post("/add", courseController.addStudentIntoCourse);

module.exports = router;