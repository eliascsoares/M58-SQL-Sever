require("dotenv").config();
const Book = require("./db/models/bookModel");
const Author = require("./db/models/authorModel");
const bookRouter = require("./db/routes/bookRoutes")
const express = require("express");
const app = express();
const connection = require("./db/connection")

Book.belongsTo(Author, { foreignKey: 'authorId' });
Author.hasMany(Book, { foreignKey: 'authorId' });

function syncTables() {
    connection.sync({
        alter:true
    }).then(() => {
        console.log("Database synced successfully");
        startServer();
    }).catch(error => {
        console.error("Failed to sync database:", error);
    });
}

function startServer() {
    app.listen(5001, () => {console.log("Server is listening on port 5001")});
}

app.use(express.json());
app.use(bookRouter);

app.get("/health", (req,res) => {
    res.status(200).send("API is healthy")
});

syncTables();