const db = require("../config/db-connection");
const Student = require("../models/studentModel");

const userController = {
    addUser: async (req, res) => {
        const {name, email, age} = req.body;
        try {
            const student = await Student.create({name:name, email:email, age:age})
            console.log("Student added successfully!");
            console.log(student);
            
            res.status(200).send('New Student', student);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating student record", error);
        }
    },

    getUsers: async (req, res) => {
       try {
            const students = await Student.findAll()
            console.log("All Student details fetched successfully!", students);
            res.status(200).send('All Students', students);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error fetching student recorda", error);
        }
    },

    getUserById: async (req, res) => {
        const {id} = req.params;
        try {
            const student = await Student.findByPk(id)
            console.log("Student details fetched successfully!", student.dataValues);
            res.status(200).send('Student', student.dataValues);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error fetching student record", error);
        }
    },

    updateUser: async (req, res) => {
        const {id} = req.params;
        const {name, email, age} = req.body;
        try {
            const student = await Student.update({name:name, email:email, age:age}, {where: {id: id}});
            const updated = await Student.findByPk(id)
            console.log("Student details updated successfully!", updated);
            res.status(200).send('Updated Student', updated);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error updating student record", error);
        }
    },

    deleteUser: async (req, res) => {
        const {id} = req.params;
        try {
            const student = await Student.destroy({where: {id}})
            console.log("Student details deleted successfully!");
            res.status(200).send("Deleted!");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error deleting student record", error);
        }
    },
};

module.exports = userController;