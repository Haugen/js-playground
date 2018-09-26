"use strict";

const l = console.log;

// Simple examples on topics that can go quite advanced, partials and currying.

// Partials. Binding, or "fixing", some arguments of a function. Here a simple
// example with bind using null as context. lodash has a _.partials function for
// binding arguments without touching "this".
function mul(a, b) {
  return a * b;
}

l(mul(2, 5));

let double = mul.bind(null, 2);
let triple = mul.bind(null, 3);

l(double(6));
l(triple(12));

// Currying is taking a function func(a, b) and turning it into func(a)(b).
// A more advanced way _.curry is also in loadash.

function curry(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    }
  }
}

function sum(a, b) {
  return a + b;
}

let currySum = curry(sum);
l(currySum(5)(6)); // 11.
