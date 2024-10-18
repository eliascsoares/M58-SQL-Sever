const Book = require("../models/bookModel");

async function deleteAllBooks(req,res) {
    try {
        await Book.destroy({
            where: {},
            truncate: true
        });
        res.status(200).json({ message: "All books have been deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting all books" });
    }
}

module.exports = deleteAllBooks;