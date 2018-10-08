"use strict";

const l = console.log;

// Chaining .then works great. The return value of each .then gets passed to the
// next .then.
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  l(result);
  return result * 2;
}).then(function(result) {
  l(result);
})

// Fetch is a common build in function for fetching remote data, using promises.
fetch('https://jsonplaceholder.typicode.com/users')
  // First .then gets called as soon as the server responds.
  .then(response => response.json())
  // Second .then is called when all the data is fetched.
  .then(json => {
    for (let user of json) {
      l(user.name);
    }
  // The first .catch in the chain gets called if there is an error on the way.
  }).catch(error => l(error));

//

// Example custom error for handeling 404 and 500 responses that is not treated
// as errors by fetch().
class HttpError extends Error { // (1)
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) { // (2)
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
    .catch(err => l(err));
}

function demoGithubUser() {
  let name = prompt('Enter a name?', 'Haugen');

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      l(user.name); // (1)
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) { // (2)
        alert('No such user, please reenter.');
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();

//

new Promise(function(resolve, reject) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error('Ooops!'));
    }, 1000);
  });
}).catch(err => console.log(err));
