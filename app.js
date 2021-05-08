// Please follow the branches for further topics
// 5. Reading Writing Files

var { readFileSync, writeFileSync, readFile, writeFile } = require("fs"); // Import fs module

// SYNCHRONOUS
// // Read a file Synchronously (First finishes this then next code)
// // readFileSync(path, encoding)

// var readMe = readFileSync('./readMe.txt', 'utf-8')

// // Writing File (Synchronously)
// // writeFileSync(path, data)

// writeFileSync('./writeMe.txt', readMe)

// ASYNCHRONOUS
// Read a file Asynchronously (other code continues, while this reads)
// readFile(path, encoding)

readFile("readMeAsync.txt", "utf-8", function (err, data) {
  console.log(data);
  writeFile("writeMeAsync.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
