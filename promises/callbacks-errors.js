"use strict";

const l = console.log;
const scriptToLoad = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js';

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`An error occured for loading ${script.src}.`));
  document.head.append(script);
}

loadScript(scriptToLoad, function(error, script) {
  if (error) {
    l(error);
  } else {
    l(`Cool, the ${script.src} is loaded`);
    l( _ ); // lodash object variable.
  }
});

//

function isEven(a, b, callback) {
  let result = a + b;
  if (result % 2 == 0) return callback(null, result);
  return callback(new Error(`${result} is not even.`));
}

isEven(5, 3, function(err, res) {
  if (err) {
    l(err);
  } else {
    l(`Returned ${res} is even.`);
  }
});
