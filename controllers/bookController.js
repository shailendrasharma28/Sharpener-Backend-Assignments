const db = require("../config/db-connection");
const Book = require("../models/bookModel.js");

const bookController = {
    getBooks: async (req, res) => {
        const {id} = req.params;
       try {
            const books = await Book.findAll({where: {id}})
            console.log("All book details fetched successfully!");
            res.status(200).json( books);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error fetching book recorda", error);
        }
    },
};

module.exports = bookController;