"use strict";

const l = console.log;
let value = 'hey';

// Same
Promise.resolve(value);
new Promise((resolve, reject) => resolve(value));

// Same
Promise.reject(value).catch(err => l(err));
new Promise((resolve, reject) => reject(value)).catch(err => l(err));

// Promise.all iterates an iterable, usually an array with promises, and returns
// an array with results once all promises are resolved. If an error occur, the
// array keeps working but returns nothing.
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve('3 sec'), 3000)),
  new Promise((resolve, reject) => setTimeout(() => resolve('2 sec'), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve('1 sec'), 1000)),
]).then(function(arr) {
  arr.forEach(str => l(str));
}).catch(err => l(err));

// Promise.race() does the same as .all, but stops and returns at the first
// promise that return resolved.

//

let urls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceho#fder.typicode.com/users/3',
];

// Promise.all(urls.map(url => fetch(url).catch(err => err)))
// // for each response show its status
// .then(responses => {
//   return responses.filter(function(response) {
//     return response.status == 200
//   });
// }).then(responses => {
//   for (let response of responses) {
//     l(response);
//   }
// });

// Some practice with promises.
Promise.all(urls.map(url => fetch(url).catch(err => err)))
  .then(responses => responses.filter(response => response.status == 200))
  .then(responses => Promise.all(
    responses.map(r => r.json().catch(err => err))
  ))
  .then(users => {
    for (let user of users) {
      l(user.name);
    }
  })
  .catch(err => l(err))
