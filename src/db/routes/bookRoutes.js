const {Router} = require("express");
const bookRouter = Router();

// import a function to add a book = addBook.js
const addBook = require("../controllers/addBook");
// import a function to list all books = listAllBooks.js
const listAllBooks = require("../controllers/listAllBooks");
// import a function to update the author name on a specific book = updateAuthor.js
const updateAuthor = require("../controllers/updateAuthor");
// import a function to update the genre of a book = updateGenre.js
const updateGenre = require("../controllers/updateGenre");
// import a function to delete a book = deleteBook.js
const deleteBook = require("../controllers/deleteBook");
// import a function to list the details of an individual book = bookDetails.js
const bookDetails = require("../controllers/bookDetails");
// import a function to delete all books = deleteAllBooks.js
const deleteAllBooks = require("../controllers/deleteAllBooks");

bookRouter.post("/addBook",addBook);
bookRouter.get("/listAllBooks",listAllBooks);
bookRouter.get("/bookDetails", bookDetails);
bookRouter.put("/updateAuthor", updateAuthor);
bookRouter.put("/updateGenre", updateGenre);
bookRouter.delete("/deleteBook", deleteBook);
bookRouter.delete("/deleteAllBooks", deleteAllBooks);
//
//
//
//
//

module.exports = bookRouter;