// Please follow the branches for further topics
// 4. Event Emitter

let {EventEmitter} = require('events') // Import Event Emitter
let {inherits} = require('util') // Import util

// Example 1 

// Create Emitter
let myEmitter = new EventEmitter()

// Create Event
myEmitter.on('someEvent', function(msg){
    console.log(msg);
})

// Emit Event
myEmitter.emit('someEvent', 'the event was emitted, yaayyy!')


// Example 2

// Create a Class for Persons
let Person = function(name){
    this.name = name; // Set State of name to name of the perso
}

// Inherit - Apply Events to the Person
inherits(Person, EventEmitter) 

// create persons
var junaid = new Person('Junaid')
var hassan = new Person('Hassan')

// Create array
var people = [junaid, hassan]

// Loop through persons
people.forEach((person)=>{
    // If any person emits the event 'speak'
    person.on('speak', function(msg){
        console.log(`${person.name} said ${msg}`);
    })
})

// Emit the event
junaid.emit('speak',"Helloww jani !")
hassan.emit('speak',"kehra hal thai !")