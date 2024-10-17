const Book = require("../models/bookModel");

async function listAllBooks(req,res) {
    try {
        await Book.findAll();
        res.status(200).json(output) 
    } catch (error) {
        console.log(error);
        const responseMessage = {
            message: `Unable to find book list`
        }
        res.status(500).json(responseMessage)
    }
}

module.exports = listAllBooks;