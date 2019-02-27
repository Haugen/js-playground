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
