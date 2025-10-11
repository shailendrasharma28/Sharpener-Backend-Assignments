const db = require("../config/db-connection");

const busController = {
    addBus: (req, res) => {
        const {busNumber, totalSeats, availableSeats} = req.body;
        const addQuery = `INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)`;

        db.execute(addQuery, [busNumber, totalSeats, availableSeats], (err) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error in adding Bus!");
                db.end();
                return;
            }
            res.status(201).send("Bus details added successfully!");
            console.log(`Bus details: ${busNumber}, ${totalSeats}, ${availableSeats}`);
        });
    },

    getAvailableSeats: (req, res) => {
        const{seats} = req.params;
        const getQuery = `SELECT * FROM buses WHERE availableSeats > ?`;

        db.execute(getQuery, [seats], (err, results) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error fetching user!");
                db.end();
                return;
            }
            res.status(201).send("User details fetched successfully!");
            console.log(`User details:`, results);
        });
    },
};

module.exports = busController;