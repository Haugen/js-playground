'use strict';

const _ = {};

_.each = function(list, callback) {
  if (typeof list === 'string') {
    list = list.split('');
  }
  list.forEach(element => callback(element, list));
};
_.map = function(list, callback) {
  let temp = [];

  for (let i = 0; i < list.length; i++) {
    temp.push(callback(list[i], i, list));
  }

  return temp;
};
_.filter = function(list, callback) {
  let temp = [];

  for (let i = 0; i < list.length; i++) {
    if (callback(list[i], i, list)) {
      temp.push(list[i]);
    }
  }

  return temp;
};
_.from = function(arrLike) {
  let arr = [];

  arr = Array.prototype.slice.call(arrLike);

  return arr;
};

function createSuspectObject(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log(`My name is ${this.name}`);
    }
  };
}

let suspects = [
  'Miss Scarlet',
  'Jack White',
  'Colonel Mustard',
  'Bob Blue',
  'Cat Yellow'
];

let suspectsList = suspects.map(createSuspectObject);

console.log(
  _.each('123', function(suspect, all) {
    console.log(suspect);
  })
);
let guilty = _.map(suspects, function(suspect) {
  return suspect + ' is guilty!';
});

console.log(guilty);

let shorty = _.filter(suspects, function(suspect) {
  return suspect.length > 10;
});

console.log(shorty);

const add = function(x, y, z) {
  let arr = _.from(arguments);

  while (arr.length < 3) {
    arr.push(Math.floor((Math.random() + 1) * 5));
  }

  [x, y, z] = arr;

  return x + y + z;
};

l(add(3, 5));
