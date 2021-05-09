// Please follow the branches for further topics
// 11. Serving HTML Pages

let { createServer } = require("http");
let { createReadStream, createWriteStream } = require("fs");

// Create Server
let server = createServer((req, resp) => {
  // When Request is made
  console.log(`request was made from: ${req.url}`);

  // Create Headers
  // writeHead(status, Headers)
  resp.writeHead(200, { "Content-Type": "text/html" });

  // Write and Read Stream
  let myReadStream = createReadStream(__dirname + "/index.html", "utf8");

  // On read data pipe
  myReadStream.pipe(resp); // Send Data to response
});

// Specifying port
// listen(port, Ip) - localhost (127.0.0.1)
server.listen(3000, "127.0.0.1");
console.log(`server listening to port ${3000}`);
