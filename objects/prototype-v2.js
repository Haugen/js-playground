'use strict';

let func = function(name, age) {
  this.name = name;
  this.age = age;
};

func.prototype.role = 'user';
func.prototype.score = 0;

let obj = new func('Tobias', 32);

func.prototype.test = 'now it shows up?';

// When test is created, its __proto__ is set to Object.prototype
let test = {};
console.log(test.__proto__);
console.log(Object.prototype);
console.log(test.__proto__ === Object.prototype); // true
console.log(test instanceof Object);
console.log(Object.prototype.isPrototypeOf(test));

let arr = [];
console.log(arr);
console.log(arr.__proto__); // Array
console.log(arr.__proto__.__proto__); // Object

let fu = () => {};
console.log(fu);
console.log(fu.__proto__); // Function
console.log(fu.__proto__.__proto__); // Object
