const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Author = connection.define("Author", {
    authorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Author;