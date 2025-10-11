const db = require("../config/db-connection");

const userController = {
    addUser: (req, res) => {
        const {name, email, age} = req.body;
        const addQuery = `INSERT INTO students (name, email, age) VALUES (?, ?, ?)`;

        db.execute(addQuery, [name, email, age], (err) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error in adding student!");
                db.end();
                return;
            }
            res.status(201).send("Student details added successfully!");
            console.log(`Student details: ${name}, ${email} ${age}`);
        });
    },

    getUsers: (req, res) => {
        const getQuery = `SELECT * FROM students`;

        db.execute(getQuery, (err, results) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error fetching student!");
                db.end();
                return;
            }
            res.status(201).send("Student details fetched successfully!");
            console.log(`Student details:`, results);
        });
    },

    getUserById: (req, res) => {
        const {id} = req.params;
        const getQuery = `SELECT * FROM students WHERE id = ?`;

        db.execute(getQuery, [id], (err, results) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error fetching student!");
                db.end();
                return;
            }
            res.status(201).send("Student details fetched successfully!");
            console.log(`Student details:`, results);
        });
    },

    updateUser: (req, res) => {
        const {id} = req.params;
        const {name, email, age} = req.body;
        const updateQuery = `UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?`;

        db.execute(updateQuery, [name, email, age, id], (err) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error in updating student!");
                db.end();
                return;
            }
            res.status(201).send("Student details updated successfully!");
            console.log(`Student details: ${name} & ${email}`);
        });
    },

    deleteUser: (req, res) => {
        const {id} = req.params;
        const updateQuery = `DELETE FROM students WHERE id = ?`;

        db.execute(updateQuery, [id], (err) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error in deleting student!");
                db.end();
                return;
            }
            res.status(201).send("Student details deleted successfully!");
            console.log(`Student details deleted successdully!`);
        });
    },
};

module.exports = userController;