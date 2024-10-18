const connection = require("../connection");
const {DataTypes} = require("sequelize");

const Book = connection.define("Book",{
    bookId : {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre : {
        type: DataTypes.STRING,
        defaultValue: "Not specified"
    }
})

module.exports = Book;