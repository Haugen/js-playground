"use strict";

// Here using .map with an external function.
const weapons = ['candlestick', 'lead pipe', 'pistol'];

const breakWeapon = function(item) {
  return `Broken ${item}`;
}

const brokenItems = weapons.map(breakWeapon);

console.log(brokenItems);

let mapCust = function(x) {
  return x * 2;
}
let reduceCust = (x, y) => x + y;

let arr = [1, 2, 3]
  .map(mapCust)
  .reduce(reduceCust);

console.log(arr);