'use strict';

const l = console.log;

/**
 * The simplest of generator functions. Calling gen returns an object with two properties, a
 * Boolean done, and a value. There is also a hidden method, called next(), that when called
 * returns the next yeilded value. If that value is undefined, done will be true.
 */
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = gen();
l(generator.next()); // value; 1, done: false.
l(generator.next()); // value; 2, done: false.
l(generator.next()); // value; 3, done: false.
l(generator.next()); // value; undefined, done: true.

function* genArg(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const genArr = genArg([1, 2, 3]);

l(genArr.next());
l(genArr.next());
l(genArr.next());
l(genArr.next());
