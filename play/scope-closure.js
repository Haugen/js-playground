"use strict";

// From https://frontendmasters.com/courses/javascript-foundations/

// Was trying to figure out how to get each i in the loop to be a different i. With
// var they all read from the global var i, which by then will be 6.
for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000);
}

// This one gets a new value for i in each iteration. i is passed into each new 
// function call and used as a new variable in the IIFE.
for (var i = 1; i <= 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(`i: ${i}`);
    }, i * 1000);
  })(i);
}

// The new way of just declaring a new local variable with let on each iteration.
for (var i = 1; i <= 5; i++) {
  let j = i;
  setTimeout(function() {
    console.log(`j: ${j}`);
  }, j * 1000);
}

// Just some object and array practice.
let test = {
  name: "Tobias",
  hobbies: ['Some', 'Stuff', 'in', 'an', 'array'],
  numbers: [23, 5, 7, 4, 10, 122, 3, 5, 34],
  hobbiesString: function() {
    return this.hobbies.join(' ')
  },
  getNumbers: function() {
    return this.numbers
      .filter(num => num < 40)
      .map(num => num / 2)
      .reduce((sum, curr) => sum += curr);
  }
}

console.log(test.hobbiesString());
console.log(test.getNumbers());