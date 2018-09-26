"use strict";

const l = console.log;

// A "Decorator" is a wrapper around a function that alters its behavior.
// The main job is still carried out by the function.

//

function work(a, b) {
  l(a + b); // work is an arbitrary function or method
}

// The decorator function takes a function as an argument and adds to it. At the
// time of writing this, it's not super clear how it works.
function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(14, 25); // 9
work(4, 5, 8); // 9

l(work.calls);

for (let args of work.calls) {
  l('call:' + args.join()); // "call:1,2", "call:4,5"
}

//

function f(...args) {
  l(args.join(", "));
}

// As of writing this one, it clears a tiny bit more, but still quite complex.
function delay(func, delay) {
  return function wrapper(...args) {
    setTimeout(function () {
      return func.apply(this, args);
    }, delay);
  }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test", "demo", 234);
f1500("test");
