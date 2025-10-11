const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db-connection");

class Payment extends Model{};
Payment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    amountPaid: {
        type: DataTypes.INTEGER,
       allowNull: true
    },

    paymentStatus: {
        type: DataTypes.STRING,
       allowNull: true
    },
}, {
    sequelize,
    modelName: "Payment",
    tableName: "payments",
    timestamps: true
});

module.exports = Payment;