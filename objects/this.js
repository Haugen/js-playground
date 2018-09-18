"use strict";

const l = console.log;

let user = {
  name: "Tobias",
  age: 30,
  sayHey() {
    return `Hey ${this.name}!`;
  }
}

let admin = user;
user = null;
l(admin.sayHey());

// Without bind() "this" gets lost when called like this and not directly with
// admin.sayHey(). More on bind() later.
l((admin.name == "Tobias" ? admin.sayHey.bind(admin) : false)());

// "This" in a function will get its value during runtime. Arrow functions don't
// have a "this", so that wont work.
function func() {
  return this.name;
}

admin.f = func;
l(admin.f());

// Testing chaining calls.
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    l(this.step);
    return this;
  }
}

// Works without returning "this" after each call.
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

// For chaining method calls, "this" needs to be returned after each call.
ladder.up().up().up().down().showStep();
