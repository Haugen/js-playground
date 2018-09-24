"use strict";

const l = console.log;

// pow with recursion.
function pow(x, n) {
  return (n == 1) ? x : x * pow(x, --n);
}

l(pow(2, 5));

//

let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

l(salariesSum(company));

// Another practice at recursive functions.
function salariesSum(obj) {
  if (Array.isArray(obj)) {
    return obj.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let sub of Object.values(obj)) {
      sum += salariesSum(sub);
    }
    return sum;
  }
}

//

function sumToRec(n) {
  if (n == 1) return n;
  return n + sumToRec(n - 1);
}

function sumToFor(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i
  }
  return sum;
}

l(sumToRec(100));

//

function factorial(n) {
  return (n == 1) ? n : n * factorial(n - 1);
}

l(factorial(6));

//

// Return the n-th number of the Fibonacci sequence. Using recursive below, is
// slow and takes a ton of computational power.
function fibRec(n) {
  return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}

// Better in this case to use a loop, or "Dynamic programming". Much faster.
function fibLoop(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

l(fibLoop(50));

//

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let arr = []
function printList(list) {
  arr.push(list.value);
  return (list.next) ? printList(list.next) : arr;
}

l(printList(list));
