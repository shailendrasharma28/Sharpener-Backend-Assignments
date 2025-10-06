const http = require("http")
const port = 8080;

const server = http.createServer((req, res) => {
    console.log("Server is created!")
    res.setHeader('Content-type', 'text/html')
    if (req.url === "/home") {
      res.end("<h1>Welcome home</h1>");
    } else {
      if (req.url === "/home") {
        res.end("<h1>Welcome home</h1>");
      } else if (req.url === "/about"){
        res.end("<h1>Welcome to About Us</h1>");
      } else if (req.url === "/node"){
        res.end("<h1>Welcome to my Node Js project</h1>");
      } else {
        res.end("<h1>Page Not Found</h1>");
      }
    }
})

server.listen(port, () => {
    console.log("Server listing on port: 3000")
})