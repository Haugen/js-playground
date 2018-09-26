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

//

let i = 0;
let start = Date.now();

// Breaking up a big task into smaller, scheduled tasks with setTimeout. Helps
// with performance since other tasks can run while the count finishes.
// Without splitting, the script would freeze everything else until it finishes.
function count() {

  if (i < 1e9 - 1e6) {
    setTimeout(count, 0);
  }

  do {
    i++
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    l("Done in " + (Date.now() - start) + 'ms');
  }
}

count();

//

// Again, we can scedule and update to a div that shows the progress. Without
// a timeout, having both the counting and innerHTML in a for loop, the code
// freezes and the number is added to the div once the loop completes. Here,
// when we split it, #progress is updated continually while other scripts
// also run.
{
  let i = 0;

  function count() {

    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e6) {
      setTimeout(count, 0);
    }
  }

  count();
}

//

// Simple seconds counter.
{
  let i = 0;

  function count() {
    seconds.innerHTML = i;
    i++;
    setTimeout(count, 1000);
  }

  count();
}

//

// Using both timeout and interval to update a div every second for a given
// interval from arguments.
{
  function printNumbers(from, to) {
    if (from <= to) {
      seconds2.innerHTML = from;
      from++;
      setTimeout(printNumbers, 1000, from, to);
    }
  }

  function printNumbers2(from, to) {
    seconds3.innerHTML = from;

    let timer = setInterval(function() {
      from++;
      seconds3.innerHTML = from;
      if (from == to) clearInterval(timer);
    }, 1000);
  }

  printNumbers(5, 10);
  printNumbers2(3, 10);
}
