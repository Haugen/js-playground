"use strict";

const l = console.log;

let obj = {};

l(obj.__proto__ === Object.prototype); // True.
l(obj);

let arr = [1, 2, 3];
l(arr.__proto__); // The constructor for Array.
l(arr.__proto__.__proto__); // The constructor for Object.
l(arr.__proto__.__proto__.__proto__); // null. "Everything inherits from Object".

l(arr);

// We can actually add our own methods to build in objects like String. The only
// place where this is generally accepted is with polyfills.
String.prototype.log = function() {
  l(this);
}
"A string".repeat(3).log();

//

function f(a, b) {
  l(a + b);
}

// Adding a new method to Functions in general, that delays the function my ms
// miliseconds. Also together with a decorator.
Function.prototype.defer = function(ms) {
  let f = this;

  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
}

f.defer(1000)(2, 5); // shows "Hello!" after 1 second
