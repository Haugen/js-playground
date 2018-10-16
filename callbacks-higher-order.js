'use strict';

function checkNumber(number, yes, no) {
  if (number > 10) return yes();
  return no();
}

function yesFunc() {
  return 'Yes!';
}
function noFunc() {
  return 'no!';
}
console.log(checkNumber(50, yesFunc, noFunc));

let double = n => n * 2;
console.log(double(5));

let test = 50 > 10 ? () => console.log('Yes!') : () => console.log('No!');

let callItself = (function func(x = 20) {
  console.log(x);
  if (x > 1) func(--x);
})(5);

//

function copyAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function square(current) {
  return current ** 2;
}

let newArr = copyAndManipulate([1, 2, 3, 4, 5], square);

l(newArr);
