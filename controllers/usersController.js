const db = require("../config/db-connection");
const User = require("../models/userModel");

const userController = {
    addUser: async (req, res) => {
        const {name, email, age} = req.body;
        try {
            const user = await User.create({name:name, email:email, age:age})
            console.log("user added successfully!");
            console.log(user);
            
            res.status(200).send('New user', user);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating user record", error);
        }
    },

    getUsers: async (req, res) => {
       try {
            const users = await User.findAll()
            console.log("All user details fetched successfully!", users);
            res.status(200).send('All users', users);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error fetching user recorda", error);
        }
    },
};

module.exports = userController;