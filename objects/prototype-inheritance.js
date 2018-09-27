"use strict";

const l = console.log;

let user = {
  name: "Tobias",
  surName: "Haugen",
  get fullName() {
    return `${this.name} ${this.surName}`;
  },
  set fullName(value) {
    [this.name, this.surName] = value.split(" ");
  }
}

// Prototypical inhertiance is when an object inherits properties, methods, etc,
// from another object. One way to do it is my setting the __proto__ property
// to the parent object.
let user2 = {
  name: "Fredrik",
  admin: true
};
user2.__proto__ = user;
//l(user2.fullName); // Fredrik Haugen.
l(user2);

// We can chain the inheritance as well.
let user3 = {
  name: "Anders",
  __proto__: user2
}

l(user3.fullName = "Jonas Orrstam");
l(user.isPrototypeOf(user3)); // True.

l(user3);
l(user);

//

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

// If we don't add the stomach property to each hamster, the eat method will push
// food into the stomach property of the prototype, making all hamsters share
// stomach. A common solution is to give each inherited object its own properties
// like this.
let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
l(speedy.stomach); // Apple
l(lazy.stomach); // Now empty

//

function Test() {}
l(Test.prototype);

//

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// All these doesn't work together as intended, but behaves as commented if
// executed alone.
Rabbit.prototype = {};
l(rabbit.eats); // Still true. The now empty object only concerns new objects.
Rabbit.prototype.eats = false;
l(rabbit.eats); // Now false. Refers to the prototype object.
delete rabbit.eats;
l(rabbit.eats); // True. Nothing is deleted. rabbit doesn't have property eats.
delete Rabbit.prototype.eats;
l(rabbit.eats); // Undefined. The property of the prototype object is now deleted.

//
