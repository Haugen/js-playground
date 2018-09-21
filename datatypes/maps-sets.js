"use strict";

const l = console.log;

let map = new Map();

// Maps are similar to objects, but where keys in objects always are strings,
// keys in maps can be anything.

// Every map.set call returns the map itself, so we can “chain” the calls.
map.set("1", "str1")
  .set(1, "num1")
  .set(true, "bool");

// Can store objects are keys. Even functions?
let tobias = { name: "Tobias", age: 32 };
let func = function() { return true; }

map.set(tobias, 4);
map.set(func, "funtion");

// Passing an array of key/value pairs when creating a map works fine.
let map2 = new Map([
  [1, "num1"],
  ["1", "str1"],
  [false, "bool"]
]);

l(map2);

l(map.get(tobias));

for (let value of map.entries()) {
  l(value[0], value[1]);
}

map2.forEach((value, key) => {
  l(`${key}: ${value}`);
});

// Sets!
// A Set is a collection of values, where each value may occur only once.

let numbers = new Set();
let i = 0;

// Since set values must be unique, we can check how many iterations it takes
// to randomly generate each number between 1 and 10.
while (numbers.size < 10) {
  numbers.add(Math.floor(Math.random() * 10 + 1));
  i++;
}

// Sets can iterate over keys, values and entries (even though key and value
// will be the same item), for compatability with Map.
for (let value of numbers.entries()) {
  l(value);
}

// Save the numbers and the number of iterations it took, and sort the numbers.
let newArr = [[], [i]]
for (let value of numbers) {
  newArr[0].push(value);
}
newArr[0].sort((a, b) => a > b);

l(numbers);
l(newArr);
l(i);

// WeakMap and WeakSet are additions to Map and Set, similar but different. They
// can't be iterated, can only store objects (as keys for Map), and when the
// object loose all other references, they clean up automatically.

// Task: Take an array and return a set with no duplicate values.
// What I came up with.
function unique(arr) {
  let set = new Set();
  arr.forEach(item => {
    set.add(item);
  });
  return set;
}

// As always, a shorter, fancier solution.
function unique2(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

l(unique2(values));

//

// Take an array and sort out any anagrams.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// Using map here, but since keys are strings we could also just use a normal
// object in this case.
function aclean(arr) {
  let map = new Map();

  arr.forEach(str => {
    let sorted = str.toLowerCase().split("").sort().join("");
    if (!map.has(sorted)) map.set(sorted, str);
  });

  return Array.from(map.values());
}

l(aclean(arr));

//

// A WeakMap should clean up the objects stored as key whenever the object
// loose reference in all other places. Could still show up here since it's up
// to the engine when and how to clean up.
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let datesRead = new WeakMap();

datesRead.set(messages[0], "Today");
datesRead.set(messages[1], "Yesterday");

messages.shift();
l(datesRead);
