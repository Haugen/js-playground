"use strict";

const l = console.log;

let name = "Tobias"

function sayHi() {
  l(`Hi: ${name}`);
}

// sayHi will use whatever the global variable "name" is at the time of the
// function call.
sayHi(); // Hi: Tobias
name = "Anders";
sayHi(); // Hi: Anders

// Nesting functions. Each function gets its own local lexicon, and the nested
// function has access to the parent functions variables, just like both have
// access to the global lexicon.
function sayHiBye(first, last) {
  function getFullName() {
    return `${first} ${last}`;
  }

  l("Hi " + getFullName());
  l("Bye " + getFullName());

  return { name: getFullName(), func: getFullName };
}

let test = sayHiBye("Tobias", "Haugen");
l(test);
l(test.func());

//

function makeCounter() {
  let count = 0;
  return () => count++; // has access to the outer counter
}

let counter = makeCounter();
let counter2 = makeCounter();
l(counter()); // 0
l(counter()); // 1
l(counter()); // 2
l(counter2());

//

function f() {
  let value = Math.random();

  return function() { l(value); }
}

let g = [f(), f(), f()];

g[0]();

//

function sum(a) {
  return function(b) {
    return a + b;
  };
}

l(sum(4)(5));

//

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  }
}

function inArray(a) {
  return function(x) {
    return a.includes(x);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

l(arr.filter(inBetween(3, 6))); // 3,4,5,6
l(arr.filter(inArray([1, 2, 10]))); // 1,2

//

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// Using a function to sort an array of objects, passing the field name to sort
// on as an argument.
function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort((a, b) => a.age > b.age);
users.forEach(user => l(user));
users.sort(byField('age'));
users.forEach(user => l(user));
users.sort(byField('name'));
users.forEach(user => l(user));

//

//
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // shooter function
      l(j); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

// The fix for this in the above function was to copy "i" from the makeArmy
// lexicon into a code block deeper. Could also be rewritten as a for-loop.

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...
