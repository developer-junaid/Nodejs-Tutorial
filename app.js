// Please follow the branches for further topics
// 3. Modules and require

let {counter, adder, pi} = require('./modules/count')

console.log('counter', counter(['Junaid', 'Hassan', 'Jani']));
console.log('adder', adder(5,5));
console.log('pi', pi);