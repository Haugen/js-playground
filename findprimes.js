"use strict";

// next: for (let i = 2; i < 100; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       continue next;
//     }
//   }
//   console.log(i);
// }

function findPrimes(number = 100) {
  let primes = "";

  for (let i = 1; i <= number; i++) {
    primes += isPrime(i) ? i + " " : "";
  }

  return primes;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

console.log(findPrimes(200));
