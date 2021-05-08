// Please follow the branches for further topics
// 6. Creating and Removing directories
let {unlink, mkdirSync, rmdirSync, rmdir, mkdir, readFile, writeFile} = require('fs')

// Deleting file
// unlink('file.txt', (err)=>{
//     if(err) console.log(err);
// })


// SYNCHRONOUS //
// Creating Directory
// mkdirSync('folder')

// Removing Directory
// rmdirSync('folder')

// ASYNCHRONOUS //
// Creating Directory
// mkdir('data', function(){
//     // Read File
//     readFile('./readMe.txt', 'utf8', function(err, data){
//         // Write file
//         writeFile('./data/writeMe.txt', data, (err)=>{
//             if(err) console.log('err', err);
//         })
//     })
// })

// Make Directory Empty
unlink('./data/writeMe.txt', ()=>{
    // Remove Directory
    rmdir('data', (err)=>{
        if (err) console.log('err');
    })
})