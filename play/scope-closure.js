"use strict";

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