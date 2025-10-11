const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connection established Successfully!");
});

module.exports = connection;
