"use strict";

const l = console.log;

let arr = ["Tobias", "Anders"];
let [user1, user2] = arr;
let [first, last] = "Tobias Haugen".split(" ");

let users = new Set([
  { name: "Tobias", age: 32 },
  { name: "Anders", age: 32 }
])

// Some weird behaviour here with Set. If set user1 and user2, which are already
// declared above, to users below, I get an error about users being undefined.
// But declaring new variables (like below) or even just have a variable
// declaration after I declare users but before I deconstruct users to variables,
// ir works. Weird.
let [user3, user4] = users;
l(user3);
l(user4);

// Any iterable value can be destructured.
let [a, b, c] = "abs";
l(a, b ,c);

// We can iterate over objects (or maps or sets) and deconstruct in the for loop.
let user = {
  name: "Tobias",
  age: 32,
  id: 1
}
for (let [key, value] of Object.entries(user)) {
  l(key, value);
}

// Trying out with deconstructing and incoming object argument to a function,
// with default values.
function showMenu({
  title = "Undefined",
  width: w = 200,
  height: h = 100,
  items: [item1, item2] = ["Item1", "Item2"]
} = {}) {
  l(title, w, h, item1, item2);
}

let options = {
  title: "My menu",
  items: ["Item 1", "Item 2"]
}

showMenu(options); // With some custom values.
showMenu(); // Passing an empty object to use all default values.

//

user = { name: "John", years: 30 };

// your code to the left side:
let {name, years: age, isAdmin = false} = user;

l(name); // John
l(age); // 30
l(isAdmin); // false

//

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// Returning the person with the highest salary.
function topSalary(obj) {
  let top = 0;
  let topUser = null;

  for (let [name, value] of Object.entries(obj)) {
    if (value > top) {
      topUser = name;
      top = value;
    }
  }

  return topUser;
}

l(topSalary(salaries));
