"use strict";

const l = console.log;

// So functions are objects. We can add properties to them. func.name will
// return the name of the function, and func.length will return the number of
// arguments (not including rest arguments).

// Example of checking for the arguments lengths, while also looking at passing
// small functions as arguments to another function and executing them there.
function ask(question, ...handlers) {
  for (let handler of handlers) {
    if (handler.length == 0) handler();
    else handler(question);
  }
}

ask("Question", () => l("no arguments."), test => l(`Argument ${test}`));

//

// Setting methods to the counter function that gets returned when makeCounter
// is called.
function makeCounter() {
  let count = 0;

  let counter = function() {
    return count++;
  }
  counter.decrese = () => count--;
  counter.set = x => count = x;

  return counter;
}

let counter = new makeCounter();
l(counter());
l(counter());
l(counter());
l(counter());
l(counter.decrese());
l(counter.decrese());
l(counter.set(1));
