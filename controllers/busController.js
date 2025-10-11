const { Op } = require("sequelize");
const Bus = require("../models/busModel");

const busController = {
    addUser: async (req, res) => {
        const {busNumber, totalSeats, availableSeats} = req.body;
        try {
            const bus = await Bus.create({busNumber:busNumber, totalSeats:totalSeats, availableSeats:availableSeats})
            console.log("bus added successfully!");
            console.log(bus);
            
            res.status(200).send('New bus', bus);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating bus record", error);
        }
    },

    getUsers: async (req, res) => {
        
        const {seats} = req.params;
       try {
            const buses = await Bus.findAll({where: {availableSeats: {[Op.gt]:seats}}})
            console.log("All bus details fetched successfully!", buses);
            res.status(200).send('All buses', buses);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error fetching buse recorda", error);
        }
    },
};

module.exports = busController;