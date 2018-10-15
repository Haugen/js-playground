'use strict';

const l = console.log;

// A function that returns a function. When a variable is invoking one of these functions,
// and then becomes the retuned function, it retains the scope of its parent function.

const func = x => {
  return y => {
    return x * y;
  };
};

let func2 = func(2);
let func3 = func(3);
l(func2(2));
l(func3(2));

// Returns an object with two functions on it.
const squarer = x => {
  let n = x;

  return {
    square: () => (n = n ** 2),
    reset: () => (n = x)
  };
};

// When a and b executes, n will be remembered in its parent scope (an instance of
// squarer?).
let a = squarer(2);
let b = squarer(3);
l(a.square());
l(a.square());
l(a.reset());

l(b.square());
l(b.square());
l(b.reset());

// Some more closure practice. This could be a base for an iphone style stopwatch?
const makeTimer = () => {
  let elapsed = 0;

  const timeAgo = () => elapsed;

  const increment = () => elapsed++;

  setInterval(increment, 1000);

  return {
    check: timeAgo,
    reset: () => (elapsed = 0)
  };
};

let timer1 = makeTimer();
