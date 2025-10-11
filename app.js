const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./config/db-connection');
const userRouter = require('./routes/userRoutes');
const busRouter = require('./routes/busRoutes');

// Port Defined...
const port = 4000;
app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: 'http://www.localhost:4000'
}));

//Routes
app.use("/users", userRouter);
app.use("/buses", busRouter);

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