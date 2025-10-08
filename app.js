const port = 3000;
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.send("<h1>Hello World!</h1>");
  next();
})

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
});