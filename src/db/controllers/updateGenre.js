const Book = require("../models/bookModel");

async function updateGenre(req,res) {
    try {
        const { title, genre } = req.body;
        if (!title || !genre) {
            return res.status(400).json({ message: "Title and genre are required" });
        }

        const [updatedRows] = await Book.update(
            { genre: genre },
            { where: { title: title } }
        );

        if (updatedRows > 0) {
            res.status(200).json({ message: "Genre updated successfully" });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating genre" });
    }
}

module.exports = updateGenre;