const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db-connection");
const User = require("./userModel");

class Course extends Model{};
Course.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    courseName: {
        type: DataTypes.STRING,
       allowNull: true
    },
}, {
    sequelize,
    modelName: "Course",
    tableName: "courses",
    timestamps: true
});

module.exports = Course;