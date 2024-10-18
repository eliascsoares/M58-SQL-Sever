const Book = require("../models/bookModel");

async function deleteBook(req,res) {
    try {
        const title = req.query.title || req.body.title;

        if (!title) {
            return res.status(400).json({ message: "Book title is required" });
        }

        const deletedRows = await Book.destroy({
            where: { title: title }
        });

        if (deletedRows > 0) {
            res.status(200).json({ message: "Book deleted successfully" });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting book" });
    }
}

module.exports = deleteBook;