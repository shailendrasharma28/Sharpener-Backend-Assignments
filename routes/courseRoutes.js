const express = require("express");
const router = express.Router();

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

// All recommended Courses routes
router.get("/", (req, res) => {
  const allCourses = courses.map((course) => " " + course.name)
  res.send(`<h1>${allCourses}</h1>`)
})
router.get("/:id", (req, res) => {
  const {id} = req.params;
  const course = courses.find( course => course.id === Number(id));
  let courseName = course ? `Course: ${course.name}, Description: ${course.description}` : null;
  if(!courseName){
    courseName = `Course not found`
  }
  res.send(`<h1>${courseName}</h1>`);
})

module.exports = router;