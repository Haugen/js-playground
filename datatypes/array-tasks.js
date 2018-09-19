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
