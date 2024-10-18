const Book = require("../models/bookModel");
const Author = require("../models/authorModel");

async function listAllBooks(req,res) {
    try {
        const books = await Book.findAll({
            include: {
                model: Author,
                attributes: ['name']
            }
        });

        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        const responseMessage = {
            message: `Unable to find book list`
        }
        res.status(500).json(responseMessage)
    }
}

module.exports = listAllBooks;