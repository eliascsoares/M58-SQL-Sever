const Book = require("../models/bookModel");
const Author = require("../models/authorModel");

async function updateAuthor(req,res) {
    try {
        // Find the book by title
        const book = await Book.findOne({ where: { title: req.body.title } });
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        // Find or create the author
        const [author, created] = await Author.findOrCreate({
            where: { name: req.body.author },
            defaults: { name: req.body.author }
        });

        // Update the book's author
        book.authorId = author.authorId;
        await book.save();

        res.status(200).json({ message: "Author updated successfully", book: book });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating author" });
    }
}

module.exports = updateAuthor;