// Please follow the branches for further topics
// 9. Creating Write Stream

let http = require('http')
let {createReadStream, createWriteStream} = require('fs')

// Write and Read Stream
let myReadStream = createReadStream(__dirname + '/readMe.txt', 'utf8')
let myWriteStream = createWriteStream(__dirname + '/writeMe.txt')

// On read data
myReadStream.on('data', (chunk)=>{
    // Chunk recieved
    console.log('new chunk recieved');
    myWriteStream.write(chunk, (err)=>{
        if (err) console.log('err',err);
    })
})






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