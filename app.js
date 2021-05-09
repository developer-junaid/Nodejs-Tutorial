// Please follow the branches for further topics
// 12. Serving JSON Data

let { createServer } = require("http");
// let { c } = require("fs");

// Create Server
let server = createServer((req, resp) => {
  // When Request is made
  console.log(`request was made from: ${req.url}`);

  // Create Headers
  // writeHead(status, Headers)
  resp.writeHead(200, { "Content-Type": "application/json" });

  // Create the object you want to send
  let data = {
    name: "Junaid",
    job: "developer",
    age: 22,
  };

  // Send after stringifying
  resp.end(JSON.stringify(data));
});

// Specifying port
// listen(port, Ip) - localhost (127.0.0.1)
server.listen(3000, "127.0.0.1");
console.log(`server listening to port ${3000}`);
