const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./config/db-connection');
const studentRouter = require('./routes/usersRoutes');
const BookRouter = require('./routes/bookRoutes');
const courseRoutes = require('./routes/courseRoutes');
const User = require('./models/userModel');
const Book = require('./models/bookModel.js');
const Course = require('./models/courseModel');
const StudentCourse = require('./models/studentCourse');

// Port Defined...
const port = 4000;
app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: "*"
}));

//Routes
app.use("/users", studentRouter);
app.use("/books", BookRouter);
app.use("/courses", courseRoutes);

// one to many association
User.hasMany(Book, {foreignKey: "user_id"});
Book.belongsTo(User, {foreignKey: "user_id"});

//Many to many
User.belongsToMany(Course, {through: StudentCourse});
Course.belongsToMany(User, {through: StudentCourse});

// Middleware which logs the method of request and Url
app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`${method} request made to ${url}`);
  next();
})

db.sync({alter: true}).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})
.catch((err) => {
  console.log("Unable to connect with databse!", err);
})
// Listening server on port...
