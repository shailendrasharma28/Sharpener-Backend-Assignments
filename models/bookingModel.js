const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db-connection");

class Booking extends Model{};
Booking.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    seatNumber: {
        type: DataTypes.INTEGER,
       allowNull: true
    },
}, {
    sequelize,
    modelName: "Booking",
    tableName: "bookings",
    timestamps: true
});

module.exports = Booking;