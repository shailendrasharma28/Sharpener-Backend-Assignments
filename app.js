const port = 3000;
const express = require('express');
const app = express();

app.use('/welcome',(req, res, next) => {
  console.log("Auth Middleware called!");
  const user = "Guest"
  req.user = user;
  next();
});

app.get("/", (req, res) => {
  res.send(`Welcome to the homepage!`)
})
app.get("/welcome", (req, res) => {
  const user = req.user;
  res.send(`<h1>Welcome, ${user}!</h1>`)
})

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
});