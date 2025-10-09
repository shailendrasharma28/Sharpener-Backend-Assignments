const express = require("express");
const router = express.Router();

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

// All recommended Students routes
router.get("/", (req, res) => {
  const allStudents = students.map((std) => " " + std.name)
  res.send(`<h1>Students: ${allStudents}</h1>`)
})
router.get("/:id", (req, res) => {
  const {id} = req.params;
  const student = students.find( std => std.id === Number(id));
  let studentName = student ? `Student: ${student.name}` : null;
  if(!studentName){
    studentName = `Student not found`
  }
  res.send(`<h1>${studentName}</h1>`);
})

module.exports = router;