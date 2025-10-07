const fs = require("fs");

const routesHandler = (req, res) => {
    res.setHeader("Content-type", "text/html");

  if (req.method === "GET" && req.url === "/") {
    // File se message read karo
    fs.readFile("message.txt", (err, data) => {
      const message = err ? "" : data.toString();

      res.end(`
        <h1>${message}</h1>
        <form method="POST" action="/">
          <label>Username</label>
          <input type="text" name="username" />
          <button type="submit">Submit</button>
        </form>
      `);
    });

  } else if (req.method === "POST" && req.url === "/") {
    let dataChunks = [];

    req.on("data", (chunk) => {
      dataChunks.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(dataChunks).toString();
      const username = decodeURIComponent(parsedData.split("=")[1]);

      // File me likho
      fs.writeFile("message.txt", username, (err) => {
        if (err) {
          console.error("Error writing to file", err);
        }

        // POST ke baad redirect to GET (Refresh safe banane ke liye)
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  }
}


const testFunctions = () => {
    console.log("This is a test function");
}
module.exports = {
    handler: routesHandler,
    test: testFunctions
};
