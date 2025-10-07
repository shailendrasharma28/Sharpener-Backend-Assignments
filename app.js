const http = require("http")
const port = 8080;

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html')
    if (req.url === "/") {
      res.end(
        `
          <form method="POST" action="/message">
          <label>Username</label>
          <input type="text" name="username" />
          <button type="submit">Submit</button>
          </form>
        `
      );
    } else {
      if (req.url === "/message") {
        res.statusCode = 302;
        res.end(`
          <h1>Landed To message page!</h1>
        `);
      }
    }
})

server.listen(port, () => {
    console.log("Server listing on port: 8080")
})