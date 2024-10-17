const Book = require("../models/bookModel");

async function bookDetails(req,res) {
    try {
        const book = await Book.findOne({ title: req.params.title });
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving book details" });
    }
}

module.exports = bookDetails;