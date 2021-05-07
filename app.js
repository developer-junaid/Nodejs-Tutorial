// Please follow the branches for further topics
// 1. Global Object

console.log('Hey bro !') // Console log


// Time out - Run once for specified time
setTimeout(()=>{
    console.log('3 seconds have passed');
}, 3000)


let time = 0;
// Interval - Runs again and again for specified time
let timer = setInterval(()=>{
    time+=2;
    console.log(`${time} seconds have passed`);
    if(time > 5){
        clearInterval(timer)
        console.log('timer stopped');
    }
}, 2000)


// Print paths
console.log(__dirname); // Current directory path
console.log(__filename); // Currnent file path