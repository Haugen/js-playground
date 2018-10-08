"use strict";

const l = console.log;

// Functions starting with async always returns a promise.
async function f() {
  return 1;
}
f().then(res => res); // 1.

// Inside async functions, we can use await. Await forces javascript to stop
// executing and wait until a promise is settled. Other scripts can continue
// to execute while it waits. Great stuff.
async function cool() {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('All done!'), 1000);
  });

  let result = await promise;
  return result;
}
cool();

async function a() {
  let result = await fetch('not-an-url');
}

a().catch(err => l(err));

//

// Fetching a url using async/await with error handling.
async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(err => l(`Error: ${err}`));

loadJson('https://jsonplaceholder.typicode.com/users')
  .then(json => console.table(json))
  .catch(err => l(`Error: ${err}`));
