// Please follow the branches for further topics
// 8. Creating Read Streams



/*
const { createServer } = require('http')

// Create Server
let server = createServer((req, resp)=>{
    // When Request is made
    console.log(`request was made from: ${req.url}`);

    // Create Headers
    // writeHead(status, Headers)
    resp.writeHead(200, {'Content-Type':'text/plain'})

    // Send response
    resp.end('Hey Ninja !')

})


// Specifying port
// listen(port, Ip) - localhost (127.0.0.1)
server.listen(3000, '127.0.0.1')
console.log(`server listening to port ${3000}`);
*/