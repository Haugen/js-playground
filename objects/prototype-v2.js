'use strict';

let func = function(name, age) {
  this.name = name;
  this.age = age;
};

func.prototype.role = 'user';
func.prototype.score = 0;

let obj = new func('Tobias', 32);

// When anObject is created, its __proto__ is set to Object.prototype
let anObject = {};
anObject.__proto__; // Object prototype.
anObject.__proto__ === Object.prototype; // true
anObject instanceof Object; // true
Object.prototype.isPrototypeOf(anObject); // true

// When anArray is created, its __proto__ is set to Array.prototype
let anArray = [];
anArray.__proto__; // Array prototype.
anArray.__proto__.__proto__; // Object prototype.
anArray.__proto__ === Array.prototype; // true
anArray.__proto__.__proto__ === Object.prototype; // true
Array.prototype.isPrototypeOf(anArray); // true

// When aFunction is created, its __proto__ is set to Function.prototype.
// It also gets a reference to an empty object, its prototype.
let aFunction = function() {};
aFunction.prototype; // The constructor function prototype Object.
aFunction.prototype.prop = 'This is a property.'; // Add properties to the prototype.
aFunction.prototype.__proto__; // Object prototype.

aFunction.__proto__; // Function prototype, where bind, apply, etc lives.
aFunction.__proto__ === Function.prototype; // true
aFunction.__proto__.__proto__ === Object.prototype; // true
Function.prototype.isPrototypeOf(aFunction); // true

// A few more examples.
'A string'.__proto__; // String prototype;
'test'.__proto__ === String.prototype; // true
'test'.__proto__.__proto__ === Object.prototype; // true
true.__proto__ === Boolean.prototype; // true
Number(5).__proto__ === Number.prototype; // true

//

// A creator function with an aditional method on its prototype.
function SuperType() {
  this.role = 'user';
}
SuperType.prototype.displayName = function() {
  return this.name;
};

// Another creator function. Its prototype object will now be the object returned from
// SuperType. So, any object created through SubType will inherit from the SuperType
// creator function, as well as its prototype. This is prototypical chaining.
function SubType(name, age) {
  this.name = name;
  this.age = age;
}

// There are several ways of extending the prototype chain.
// First off, we can use the new keyword to create a new object out of SuperType.
SubType.prototype = new SuperType();
SubType.prototype.newProp = 'new Prop';

// We could also use Object.create to create a new object and pass an argument which
// will be the objects prototype. In this first case, we will go directly to the
// prototype of SuperType, and therefor miss the "role" property defined on SuperType.
SubType.prototype = Object.create(SuperType.prototype);
// Using the new keyword here solves it, but we get a redundat object in the chain.
// We can also pass another object as a second argument to extend the prototype.
SubType.prototype = Object.create(new SuperType(), {
  moreProps: {
    value: 'Another property of the prototype'
  }
});

// Some depricated ways of doing it involves Object.setPrototypeOf and just change
// the value of __proto__ manually. These are not recommended, but if we had to pick
// one using Object.setPrototypeOf is recommended. Changing Object.prototype.__proto__
// manually is a very slow and deprecated operation. If we want to manually set an
// objects prototype we should use Object.create() on creation.

let user = new SubType('Tobias', 32);

user.role; // user;
user.displayName; // Tobias

user.__proto__; // An object create from SuperType, with property "role".
user.__proto__.__proto__; // The prototype object from SuperType.
user.__proto__.__proto__.__proto__; // Object prototype.

//

let obj1 = {
  testProp: 'Im here!'
};

let obj2 = {
  name: 'Tobias'
};

obj2.__proto__ = obj1;

console.log(obj2.testProp);
