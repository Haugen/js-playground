"use strict";

const l = console.log;

let x = 1;

setInterval(function () {
  l("hey " + x++);
}, 5000);

setTimeout(l("yoo!"), 1000);

function sayHi(name) {
  l(`Hi ${name}`);
}

// clearInterval is used to cancle a timeout or an interval.
let timer = setInterval(sayHi, 1000, "Tobias");
setTimeout(() => clearInterval(timer), 4000);

// Another way to set an Interval with Timeout.
let timerId = setTimeout(function tick() {
  l("tick");
  timerId = setTimeout(tick, 2000);
}, 2000);
