const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db-connection");
const User = require("./userModel");

class Book extends Model{};
Book.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    bookName: {
        type: DataTypes.STRING,
       allowNull: true
    },

    user_id: {
        type: DataTypes.INTEGER,
       allowNull: false,
       references: {
        model: "users",
        key: "id"
       }
    },
}, {
    sequelize,
    modelName: "Book",
    tableName: "books",
    timestamps: true
});

User.hasMany(Book, {foreignKey: "user_id"});
Book.belongsTo(User, {foreignKey: "user_id"});

module.exports = Book;