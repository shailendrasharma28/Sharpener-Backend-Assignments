const db = require("../config/db-connection");
const Book = require("../models/bookModel.js");
const User = require("../models/userModel");

const userController = {
    addUser: async (req, res) => {
        const {username, email, phone, bookName} = req.body;
        try {
            const user = await User.create({name:username, email:email, phone:phone});
            const book = await Book.create({bookName, user_id: user.id})
            console.log("user added successfully!");
            
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating user record", error);
        }
    },

    getUsers: async (req, res) => {
       try {
            const users = await User.findAll()
            console.log("All user details fetched successfully!");
            res.status(200).json( users);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error fetching user recorda", error);
        }
    },

    updateUsers: async (req, res) => {
        const {id} = req.params;
        const {username, email, phone} = req.body;
       try {
            const users = await User.update({name: username, email, phone}, {where: {id}})
            const updated = await User.findByPk(id)
            console.log("All user details updated successfully!");
            res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error updating user recorda", error);
        }
    },

    deleteUsers: async (req, res) => {
        const {id} = req.params;
       try {
            const users = await User.destroy({where: {id}})
            console.log("All user details deleted successfully!");
            res.status(200).json( users);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error deleting user recorda", error);
        }
    },
};

module.exports = userController;