const mysql = require("mysql2");

const dbConfig = () => {
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

      const userTable = 
        `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(20),
            email VARCHAR(100)
        )`;

      const busTable = 
        `CREATE TABLE IF NOT EXISTS buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(20),
            totalSeats INT,
            availableSeats INT
        )`;
      const bookingTable = 
        `CREATE TABLE IF NOT EXISTS bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT
        )`;

      const paymentTable = 
        `CREATE TABLE IF NOT EXISTS payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid INT,
            paymentStatus VARCHAR(50)
        )`;

      connection.query(userTable, (error) => {
        if(error) {
            console.log(error);
        }
        console.log(`userTable tble created!`);
      });

      connection.query(busTable, (error) => {
        if(error) {
            console.log(error);
        }
        console.log(`busTable tale created!`);
      });

      connection.query(bookingTable, (error) => {
        if(error) {
            console.log(error);
        }
        console.log(`bookingTable table created!`);
      });

      connection.query(paymentTable, (error) => {
        if(error) {
            console.log(error);
        }
        console.log(`paymentTable table created!`);
      });
    });

    return connection;
}

module.exports = dbConfig;