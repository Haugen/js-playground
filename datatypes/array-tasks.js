"use strict";

const l = console.log;

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

l(camelize2("background-color"));
l(camelize2("list-style-image"));
l(camelize2("-webkit-transition"));

// What I came up with first...
function camelize(str) {
  let chars = str.split("");
  for (let char in chars) {
    if (chars[char] == "-") {
      chars[char] = "";
      chars[+char + 1] = chars[+char + 1].toUpperCase();
    }
  }
  let newStr = chars.join("");
  return newStr;
}

// A fancier shorter and fancier solution.
function camelize2(str) {
  return str
    .split("-")
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join("");
}

//

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 6);
l(filtered);

function filterRange(arr, a, b) {
  let newArr = arr.filter((item) => (item >= a && item <= b));
  return newArr;
}

//

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 4, 10); // removed the numbers except from 4 to 10

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

l(arr);

//

arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => a - b).reverse();
l(arr); // 8, 5, 2, 1, -10

//

arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted2(arr);

// What I first came up with.
function copySorted(arr) {
  let newArr = [];
  for (let key in arr) {
    newArr[key] = arr[key];
  }
  return newArr.sort();
}

// Shorter solution.
function copySorted2(arr) {
  // Can ommit arguments for slice when copying whole array, but keeping it here
  // for clarity.
  return arr.slice(0, arr.length).sort();
}

l(sorted); // CSS, HTML, JavaScript
l(arr); // HTML, JavaScript, CSS (no changes)

//

let users = [
  { firstName: "Tobias", lastName: "Haugen", id: 1, age: 32 },
  { firstName: "Anders", lastName: "Svensson", id: 2, age: 40 },
  { firstName: "Fredrik", lastName: "Haugen", id: 3, age: 30 },
  { firstName: "Adam", lastName: "Baga", id: 4, age: 25 }
];

let names = users.map(function(item) {
  return item.firstName;
});

// Or shorter map for this case.
names = users.map(item => item.firstName);

l(names);

//

// More mapping practice.
let usersMapped = users.map(item => ({
  fullName: `${item.firstName} ${item.lastName}`,
  id: item.id
}));

l(usersMapped);

//

l(sortByName(users));

// Sort the user objects in "users" array by user age.
function sortByName(arr) {
  return arr.sort((a, b) => a.age > b.age);
}

//

l(getAverageAge2(users));

// What I first came up with.
function getAverageAge(arr) {
  let totalAge = 0;
  arr.forEach(item => totalAge += item.age);
  return totalAge / arr.length;
}

// The fancy pantsy one line solution.
function getAverageAge2(users) {
  return users.reduce((sum, current) => sum + current.age, 0) / users.length;
}
