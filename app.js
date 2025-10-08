const port = 4000;
const express = require('express');
const app = express();

// Middleware which logs the method of request and Url
app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`${method} request made to ${url}`);
  next();
})

// homepage route
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the homepage!</h1>`)
})

// Dynamic Routes for userdetails using url params and query params
app.get("/welcome/:username", (req, res) => {
  const {username} = req.params;
  const {role} = req.query;
  res.send(`<h1> Welcome ${username}, your role is ${role}</h1>`)
})

// All recommended routes
app.get("/products", (req, res) => {
  res.send(`<h1>Here is the list of all products</h1>`)
})
app.post("/products", (req, res) => {
  res.send(`<h1>A new product has been added.</h1>`)
})
app.get("/categories", (req, res) => {
  res.send(`<h1>Here is the list of all categories.</h1>`)
})
app.post("/categories", (req, res) => {
  res.send(`<h1>A new category has been created.</h1>`)
})

// Wildcard Route handling with 404 not found errror page
app.use((req, res) => {
   res.status(404).type('html').send('<h1>404 - Page Not Found</h1>');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});