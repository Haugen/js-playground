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
