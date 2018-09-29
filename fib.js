"use strict";

const l = console.log;

// Basic fibonacci recursive search. Getting the 40'th number takes several
// seconds with this method.
function fib(n) {
  return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}

// Adding some caching. Save every number calculated in a map, so we never need
// to calculate the same number more than once. With caching in this way, we get
// the largest Fibonacci number knows in just a few ms.
function fibCache(n) {
  if (n <= 1) return n;
  if (map.has(n)) return map.get(n);
  let num = fibCache(n - 1) + fibCache(n - 2);
  map.set(n, num);
  return num;
}

// Call each function and print the results in the console.
function calcFib(n, func) {
  let start = new Date(),
      number = func(n),
      end = new Date,
      ms = end - start;

  return `${func.name} calculated Fib nr ${n} to ${number} in ${ms}ms.`
}

// Create the map used in fibCache and calculate each function.
let map = new Map();
l(calcFib(1400, fibCache));
l(calcFib(40, fib));
