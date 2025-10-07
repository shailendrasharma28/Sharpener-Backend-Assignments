const http = require("http");
const routes = require("./routes");
const port = 8080;

routes.test();
const server = http.createServer(routes.handler);

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
