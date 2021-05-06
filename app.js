var { EventEmitter } = require("events"); // For creating custom events
var util = require("util");

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, EventEmitter); // Any thing created using Person can have events now

// Creating

var junaid = new Person("junaid");
var hassan = new Person("hassan");
var ryu = new Person("ryu");

let people = [junaid, hassan, ryu];

people.forEach((person) => {
  // Logic
  person.on("speak", (message) => {
    console.log(`${person.name} said ${message}`);
  });
});

junaid.emit("speak", "helloww boii");
ryu.emit("speak", "go back!");
