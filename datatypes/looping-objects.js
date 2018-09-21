"use strict";

const l = console.log;

let id = Symbol("ID");

let user = {
  name: "Tobias",
  age: 32,
  [id]: 1
}

l(Object.keys(user));
l(Object.values(user));
l(Object.entries(user));

let i = 1;
function loop(obj) {
  let arr = []
  for (let entries of Object.entries(obj)) {
    arr.push(`Entry ${i} is ${entries[0]}: ${entries[1]}`);
    i++;
  }
  return arr;
}

l(loop(user));

// The Symbol wont show up in a normal iteration, but we can get the Symbols
// exclusively, and also use ownKeys on Reflect to return ALL keys.
l(Object.getOwnPropertySymbols(user));
l(Reflect.ownKeys(user));

//

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// First simple solution for summing salaries.
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

// Shorter and using reduce.
function sumSalaries2(salaries) {
  return Object.values(salaries).reduce((sum, current) => sum += current, 0);
}

l(sumSalaries2(salaries)); // 650
