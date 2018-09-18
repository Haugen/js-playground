"use strict";

const l = console.log;

// Use \n for linebreaks in strings with "" or ''.
let guests = "Guests:\n *Tobias\n *Anders\n *Jonas";
// With backstricks we can use linebreaks in string variables.
guests = `Guests:
  \t*Tobias
  *Anders
  *Jonas`;

l(guests.repeat(3));

// So \u lets us print special characters, like smileys. How 'bout that.
l("\u{1F60D}");

l(guests[guests.length - 1]);

// "in" here gets the numeric position of each string, while "of" gets the
// actual character of that position.
for (let char in guests) {
  l(char);
}
for (let char of guests) {
  l(char);
}

let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
l(str);

// Go through a string looking for a target position.
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`${target} found at position: ${foundPos}`);
  pos = foundPos + 1;
}

// Or in a shorter way, while also going backwards.
pos = str.length + 1;
while ((pos = str.lastIndexOf(target, pos - 1)) != -1) {
  l(pos);
}

// Returns string with first character as uppercase.
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
  //return newStr;
}

l(ucFirst("tobias"));
