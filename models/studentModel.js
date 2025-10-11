const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db-connection");

class Student extends Model{};
Student.init({
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

    age: {
        type: DataTypes.STRING,
       allowNull: true
    }
}, {
    sequelize,
    modelName: "Student",
    tableName: "students",
    timestamps: true
});

module.exports = Student;