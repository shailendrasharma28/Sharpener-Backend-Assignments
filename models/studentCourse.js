const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db-connection");

class StudentCourse extends Model{};
StudentCourse.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    studentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "users",
            key: "id"
        }
    },

    course_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "courses",
            key: "id"
        }
    },

}, {
    sequelize,
    modelName: "StudentCourse",
    tableName: "studentCourses",
    timestamps: true
});

module.exports = StudentCourse;