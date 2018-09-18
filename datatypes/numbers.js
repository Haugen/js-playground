"use strict";

const l = console.log;

// Methods can be used on primitives, like strings and numbers, because a
// wrapper object is teporarly created to perform the operation. After it is
// done, the wrapper object is destroyed.
let string = "String.";
l(string.toUpperCase());

let big = 1e10;
let small = 1e-6;

let n = 1.5324234324;
l(n.toFixed(2));

let hex = 456.5345353453453457;
hex = +hex.toFixed(5);
l(typeof hex);

l(0.1.toFixed(20)); // 0.10000000000000000555

l(NaN === NaN); // False
l(Object.is(NaN, NaN)); // True

l(parseInt('100px')); // 100
l(parseFloat('12.5em')); // 12.5

// Random values between 5 and 15.
for (let i = 1; i < 20; i++) {
  l((Math.random() * 10 + 5).toFixed(0));
}
