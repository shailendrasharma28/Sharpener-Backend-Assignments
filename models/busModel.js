const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db-connection");

class Bus extends Model{};
Bus.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    busNumber: {
        type: DataTypes.STRING,
       allowNull: true
    },

    totalSeats: {
        type: DataTypes.INTEGER,
       allowNull: true
    },

    availableSeats: {
        type: DataTypes.INTEGER,
       allowNull: true
    }
}, {
    sequelize,
    modelName: "Bus",
    tableName: "buses",
    timestamps: true
});

module.exports = Bus;