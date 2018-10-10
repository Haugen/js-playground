"use strict";

const l = console.log;

// "rest parameters" gathers a list of arguments into an array.
// "spread operator" expands an array into a list.

// ...args containing all the arguments passed to the function. In the function
// we also have access to the special variable "arguments", containing all the
// arguments.
function sumAll(...args) {
  let sum = 0;
  l(arguments);

  for (let arg of args) sum += arg;

  return sum;
}

l(sumAll(1, 2, 3, 4, 5, 6));

// Spread operator works the opposite way, taking an array and turning it into
// a list. Can be combined with other arrays, and mixed with single arguments.
let numbers = [1, 2, 3, 4, 5];
let moreNumbers = [6, 7, 8, 9];
l(Math.max(...numbers, 5, 60, ...moreNumbers));

let str = "Hello";
// Same output for both rows below.
l([...str]);
l(Array.from(str));

//

// Another example of using rest.
function restArgs(...args) {
  let sum = 0;
  sum = args.reduce((sum, curr) => {
    if (typeof curr == "number") return sum + curr;
    return sum;
  });
  l(sum);
}

restArgs(1, 2, [1, 2, 3], 10, 3, 4, 5, 6, 'hey');
