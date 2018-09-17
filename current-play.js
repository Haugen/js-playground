"use strict";

function findPrimes(x = 100) {
  for (let i = 1; i <= x; i++) {
    if (!isPrime(i)) continue;
    console.log(i);
  }
}

function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i == 0) return false;
  }
  return true;
}

findPrimes();
