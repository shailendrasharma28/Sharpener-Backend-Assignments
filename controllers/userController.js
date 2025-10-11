const db = require("../config/db-connection");

const userController = {
    addUser: (req, res) => {
        const {name, email} = req.body;
        const addQuery = `INSERT INTO users (name, email) VALUES (?, ?)`;

        db.execute(addQuery, [name, email], (err) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error in adding user!");
                db.end();
                return;
            }
            res.status(201).send("User details added successfully!");
            console.log(`User details: ${name} & ${email}`);
        });
    },

    updateUser: (req, res) => {
        const {id} = req.params;
        const {name, email} = req.body;
        const updateQuery = `UPDATE users SET name = ?, email = ? WHERE id = ?`;

        db.execute(updateQuery, [name, email, id], (err) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error in updating user!");
                db.end();
                return;
            }
            res.status(201).send("User details updated successfully!");
            console.log(`User details: ${name} & ${email}`);
        });
    },

    deleteUser: (req, res) => {
        const {id} = req.params;
        const updateQuery = `DELETE FROM users WHERE id = ?`;

        db.execute(updateQuery, [id], (err) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error in deleting user!");
                db.end();
                return;
            }
            res.status(201).send("User details deleted successfully!");
            console.log(`User details deleted successdully!`);
        });
    },
};

module.exports = userController;