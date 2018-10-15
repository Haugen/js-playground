'use strict';

const l = console.log;

const myAlert = () => {
  const count = 'Count';
  let x = 0;

  const alerter = () => {
    l(`${count}: ${x++}`);
  };

  return alerter;
};

let alertFunc = myAlert();
let alertFunc2 = myAlert();

alertFunc();
