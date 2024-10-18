const Book = require("../models/bookModel");
const Author = require("../models/authorModel");

async function getAuthorBooks(req, res) {
    try {
        const authorName = req.query.name || req.body.name || req.query.author || req.body.author;

        if (!authorName) {
            return res.status(400).json({ message: "Author name is required" });
        }

        const author = await Author.findOne({
            where: { name: authorName },
            include: [{ 
                model: Book,
                attributes: ['title', 'genre', 'bookId']
            }]
        });
        if (author) {
            const response = {
                authorId: author.authorId,
                name: author.name,
                books: author.Books.map(book => ({
                    bookId: book.bookId,
                    title: book.title,
                    genre: book.genre
                }))
            };
            res.status(200).json(response);
        } else {
            res.status(404).json({ message: "Author not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving author's books" });
    }
}

module.exports = getAuthorBooks;