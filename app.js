const express = require('express');
const app = express();
const mysql = require("mysql2")
const cors = require("cors")

// Port Defined...
const port = 4000;
app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: 'http://www.localhost:4000'
}));

// Mysql setup
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mydb'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  }
  console.log("Connection established Successfully!");
})

// Middleware which logs the method of request and Url
app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`${method} request made to ${url}`);
  next();
})

// Listening server on port...
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});