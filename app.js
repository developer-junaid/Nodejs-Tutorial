// Please follow the branches for further topics
// 2. Function Expressions

// Normal Function
function sayHi(){
    console.log('Hi');
}

sayHi()

// Function expression
let sayBye = function(){
    console.log('Bye');
}

sayBye()

// Passing function to a function
function saySomething (fun) {
    fun()
}

saySomething(sayBye)