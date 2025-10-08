const express = require("express");
const router = express.Router();

// homepage route
router.get("/", (req, res) => {
  res.send(`<h1>Welcome to the homepage!</h1>`)
})

// Dynamic Routes for userdetails using url params and query params
router.get("/welcome/:username", (req, res) => {
  const {username} = req.params;
  const {role} = req.query;
  res.send(`<h1> Welcome ${username}, your role is ${role}</h1>`)
})

module.exports = router;