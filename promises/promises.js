"use strict";

const l = console.log;
const scriptToLoad = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js';

// Creating a new promise. Takes two predefined functions as arguments.
// Call resolve if everything went okay.
// Call reject if there was an error.
let promise = new Promise(function(resolve, reject) {
  setTimeout(function () {
    return reject(new Error("Oooops!!"))
    // return resolve("All good. Carry on!")
  }, 1000);
})

// The .then function executes one the promise once the result is done and the
// promise state changes from pending to settled. .then takes two functions as
// arguments.
// The first one is executed if resolve is returned from the promise.
// The second one is executed if reject is returned from the promise.
promise.then(
  res => (res),
  err => (err)
);

// .catch is a shorthand for .then(null, error()) to only handle errors.
promise.catch(err => (err));

//

// The same function from callbacks-errors.js, but now with a promise instead.
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script.src);
    script.onerror = () => reject(new Error(`Failed to load script ${script.src}.`));

    document.head.append(script);
  });
}

let promiseScript = loadScript(scriptToLoad);

promiseScript.then(
  res => l(`Loaded script ${res}.`),
  err => l(err)
);

promiseScript.catch(
  err => l('With promises we can .then and .catch them several times.')
);

//

// Timeout uses callbacks. Here we build our own function, delay, as a promise
// instead.
function delay(ms) {
  // What I first came up with.
  // return new Promise(function(resolve, reject) {
  //   setTimeout(function () {
  //     resolve(ms / 1000);
  //   }, ms);
  // })

  // Shorter more elegant solution.
  return new Promise(resolve => setTimeout(() => resolve(ms / 1000), ms));
}

delay(2000).then((res) => l(`runs after ${res} seconds`));
