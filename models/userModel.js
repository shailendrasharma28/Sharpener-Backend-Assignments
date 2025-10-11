const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db-connection");

class User extends Model{};
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
       allowNull: true
    },

    email: {
        type: DataTypes.STRING,
       allowNull: true
    },

    phone: {
        type: DataTypes.STRING,
       allowNull: true
    }
}, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true
});

module.exports = User;