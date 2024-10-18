const Author = require("../models/authorModel");

async function addAuthor(req, res) {
    try {
        const authorName = req.body.name || req.body.author;

        if (!authorName) {
            return res.status(400).json({ message: "Author name is required" });
        }

        // Check if author already exists
        const existingAuthor = await Author.findOne({ where: { name: authorName } });
        if (existingAuthor) {
            return res.status(409).json({ message: "Author already exists" });
        }

        const newAuthor = await Author.create({ name: authorName });
        res.status(201).json({ message: "Author added successfully", author: newAuthor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding author" });
    }
}

module.exports = addAuthor;