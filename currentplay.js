"use strict";

let suffix = "!";

function calcSum(x, y = defaultValue()) {
  console.log(x, y);
  let suffix = "!!";
  let prefix = "Totalt: ";
  return (
    prefix +
    Number(x + y) + suffix
  );
}

function defaultValue() {
  return 15;
}

setTimeout(function () {
  console.log(suffix);
}, 1000);

//console.log(prefix);

console.log(calcSum());
