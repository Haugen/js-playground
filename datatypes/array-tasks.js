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
