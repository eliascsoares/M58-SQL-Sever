const Book = require('./bookModel');
const Author = require('./authorModel');

Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });

module.exports = { Book, Author };