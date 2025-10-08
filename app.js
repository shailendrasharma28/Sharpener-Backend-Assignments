const express = require('express');
const app = express();
const homeRoutes = require("./routes/homepageRoutes");
const productRoutes = require("./routes/productRoutes");
const categpryRoutes = require("./routes/categoriesRoutes");

// Port Defined...
const port = 4000;

// Middleware which logs the method of request and Url
app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`${method} request made to ${url}`);
  next();
})

// Routes handling with express routes
app.use("/", homeRoutes);
app.use("/products", productRoutes);
app.use("/categories", categpryRoutes);

// Wildcard Route handling with 404 not found errror page
app.use((req, res) => {
   res.status(404).type('html').send('<h1>404 - Page Not Found</h1>');
});

// Listening server on port...
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});