"use strict";

function pow(x, p) {
  if (p < 0) return NaN;
  if (Math.round(p) != p) return NaN;

  let result = 1;

  for (let i = 0; i < p; i++) {
    result *= x;
  }

  return result;
}

console.log( pow(3, "hey") );
