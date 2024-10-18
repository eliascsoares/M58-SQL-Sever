const Book = require("../models/bookModel");
const Author = require("../models/authorModel");

async function bookDetails(req,res) {
    try {
        const title = req.query.title;

        if (!title) {
            return res.status(400).json({ message: "Book title is required. Please provide a 'title' query parameter." });
        }

        console.log("Searching for book with title:", title); 

        const book = await Book.findOne({
            where: { title: title },
            include: [{
                model: Author,
                attributes: ['name']
            }]
        });

        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        console.log("Error in bookDetails:", error);
        res.status(500).json({ message: "Error retrieving book details" });
    }
}

module.exports = bookDetails;