"use strict";


function calcSum(x, y = defaultValue(defaultValue2())) {
  let prefix = "Totalt: ";
  return (
    prefix +
    Number(x + y)
  );
}

function defaultValue(func) {
  return func;
}

function defaultValue2() {
  return 25;
}

console.log(calcSum(80));
