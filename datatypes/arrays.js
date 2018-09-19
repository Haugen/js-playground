"use strict";

const l = console.log;

// Arrays are better suited than objects for ordered collections of data.

let arr = new Array();
let fruits = ["Apple", "Orange", "Plum", "Kiwi"];

// Delete doesn't work great with arrays. Will delete the value, but not the
// place in the array.
delete fruits[2];
// Lets use splice() instead. Starts at an index (negative index start from end),
// removes x items (can be 0), and optionally replaces them with new ones.
fruits.splice(2, 1, "Apple", "Banana", "Pear");
fruits.push("Mandarin");

for (let key in fruits) {
  l(key, fruits[key]);
}

// More array methods:
// * slice(start, end) - Returns a new sub array.
// * concat(args...) - Joins array with other arrays and/or items.

l(fruits.lastIndexOf("Banana", fruits.length - 1));
l(fruits.includes("Apple", 0));

// An array can hold all kinds of datatypes.
let mixed = [
  "Tobias",
  56,
  true,
  { name: "Anders", age: 32 },
  function() { return "A function in an array!"; },
  1.234
];

// Going through the mixed array, performing different outputs depending on the
// type.
for (let i = 0; i <= mixed.length - 1; i++) {
  switch (typeof mixed[i]) {
    case "number":
    case "string":
    case "boolean":
      mixed[i];
      break;
    case "object":
      for (let key in mixed[i]) {
        mixed[i][key];
      }
      break;
    case "function":
      mixed[i]();
      break;
    default:
      mixed[i];
      break;
  }
}

// pop() removes the last item.
fruits.pop();
// push() adds one or more items to the end.
fruits.push("Banana", "Peach");
// shift() removes the first item.
fruits.shift();
// unshift() adds one or more items to the beginnig.
fruits.unshift("Plum", "Lemon");
l(fruits);

for (let fruit of fruits) {
  fruit;
}

// Simplest way to clear an array is to set its length to 0. Note that length is
// also the value of the largest index + 1, not the number of items in the array.
fruits[100] = "Avocado";
l(fruits.length);
fruits.length = 0;

// Arrays can be multidimensional, storing arrays in arrays.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

matrix[1][0]; // 4

// Array play with above methods.
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-roll");
styles[Math.floor(styles.length / 2)] = "Classics";
l(styles.shift());
styles.unshift("Rap", "Reggae");

l(styles);

let users = [
  { id: 1, name: "Tobias" },
  { id: 2, name: "Johan" },
  { id: 3, name: "Anders" }
];

// find() does a function call for each element. If true, returns the element.
let user = users.find(item => item.id == 1);
// filter() is similar, but can return more than one result.
user = users.filter(item => item.id < 3);
// map() goes through the array
user = users.map(item => item.name);
// Can take arguments and perform logic in the function.
l(["1", "2", "3"].map(function(x) {
  return x ** 2;
}));
// Shorthand for above method.
l(["1", "2", "3"].map(x => x ** 2));

l(users);
l(user);

// Sort an array with a customized sorting.
let sorted = [1, -2, 15, 2, 0, 8].sort(function(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
  // or "return a - b;" for short.
  // or even "(a, b) => a - b".
});
l(sorted);
