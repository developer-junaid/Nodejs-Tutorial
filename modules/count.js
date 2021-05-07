let counter = function(arr){
    return `There are ${arr.length} elements in this array`
}


let adder = (a, b) =>{
    return `Sum of the numbers is ${a+b}`
}

let pi = 3.142;



// Exporting - 1
// module.exports.counter = counter
// module.exports.adder = adder
// module.exports.pi = pi

// Exporting - 2
module.exports = {
    counter,
    adder,
    pi
}