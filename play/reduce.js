'use strict';

let obj = { a: 1, b: 3, c: 1, d: 2, e: 2, f: 1, g: 5 };
let arr = [1, 2, 3, 4, 5];
const l = console.log;

// Own implementation of reduce as a helper function, underscoreUnderscore...?
// Only handles arrays with number now, though...
const __ = {
  reduce(iterable, callback, initial = 0) {
    let sum = initial;

    for (let i = 0; i < iterable.length; i++) {
      sum = callback(sum, iterable[i]);
    }

    return sum;
  }
};

// Underscore/Lodash reduce can go over objects, where we get access to the current key and
// value, as well as the current result.
let reducedObj = _.reduce(
  obj,
  function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
);

let reducedArr = __.reduce(
  arr,
  function(result, currentValue) {
    return result + currentValue;
  },
  0
);

// console.log(reducedArr);
// console.log(reducedObj);

const newDevelopment = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { 'dining room': true },
      { 'billiard room': false },
      { library: true }
    ]
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': true },
      { library: false }
    ]
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { 'dining room': false },
      { 'billiard room': true },
      { library: false }
    ]
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': true },
      { 'billiard room': false },
      { library: false }
    ]
  }
];

// Very messy sollution to figure out which room no one was in from the array of
// suspects above. Maybe underscore/lodash can simplify things for us?
let emptyRooms = _.reduce(
  newDevelopment,
  function(result, value, key, obj) {
    obj[key].rooms.forEach(function(room) {
      for (let [key, value] of Object.entries(room)) {
        if (value && result.find(key => key)) {
          // Underscore/Lodash "without" method was helpful here, instead of the
          // now commented early version.
          result = _.without(result, key);
          // let index = result.indexOf(key);
          // if (index >= 0) result.splice(index, 1);
        }
      }
    });
    return result;
  },
  [
    'kitchen',
    'ballroom',
    'conservatory',
    'dining room',
    'billiard room',
    'library'
  ]
);

l(emptyRooms);
