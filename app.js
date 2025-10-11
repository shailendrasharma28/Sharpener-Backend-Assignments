const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./config/db-connection');
const studentRouter = require('./routes/studentRoutes');

// Port Defined...
const port = 4000;
app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: 'http://www.localhost:4000'
}));

//Routes
app.use("/students", studentRouter);

// Middleware which logs the method of request and Url
app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`${method} request made to ${url}`);
  next();
})

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})
.catch((err) => {
  console.log("Unable to connect with databse!");
})
// Listening server on port...
