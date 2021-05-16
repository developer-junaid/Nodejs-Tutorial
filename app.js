// Please follow the branches for further topics
// 12. Basic Routing
const { createServer } = require("http");
const { createReadStream } = require("fs");

// Create Server
let server = createServer((req, resp) => {
  // When Request is made
  console.log(`request was made from: ${req.url}`);

  // If Route = /home or /
  if (req.url === "/home" || req.url == "/") {
    // Send Home page
    resp.writeHead(200, { "Content-Type": "text/html" });
    createReadStream(__dirname + "/index.html").pipe(resp);
  } else if (req.url === "/contact") {
    // If it is contact
    // Send contact Pag
    resp.writeHead(200, { "Content-Type": "text/html" });
    createReadStream(__dirname + "/contact.html").pipe(resp);
  } else if (req.url === "/api/ninjas") {
    // If this is api request
    var ninjas = [
      { name: "junaid", age: 23 },
      { name: "hassan", age: 25 },
    ];

    // Send the data
    resp.writeHead(200, { "Content-Type": "application/json" });
    // Send Data
    resp.end(JSON.stringify(ninjas));
  } else {
    // Send Not found page
    resp.writeHead(404, { "Content-Type": "text/html" });
    createReadStream(__dirname + "/404.html").pipe(resp);
  }
});

// Specifying port
// listen(port, Ip) - localhost (127.0.0.1)
server.listen(3000, "127.0.0.1");
console.log(`server listening to port ${3000}`);
