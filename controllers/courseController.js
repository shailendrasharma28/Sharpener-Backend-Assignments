const db = require("../config/db-connection");
const Course = require("../models/courseModel.js");
const StudentCourse = require("../models/studentCourse.js");

const courseController = {
    addCourse: async (req, res) => {
        const {courseName} = req.body;
       try {
            const course = await Course.create({courseName: courseName})
            console.log("New course created successfully!");
            res.status(200).json( course);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating course", error);
        }
    },

    addStudentIntoCourse: async (req, res) => {
        try {
            const {studentId, courseId} = req.body;
            const studentCourse = await StudentCourse.addCourse({studentId, course_id: courseId});
            console.log("Student added to course successfully!");
            res.status(200).json( studentCourse);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error adding student into course", error);
        }
    }
};

module.exports = courseController;