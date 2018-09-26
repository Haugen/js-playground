"use strict";

const l = console.log;

let user = {
  name: "Tobias",
  sayHi(phrase = "Hello there") {
    l(phrase, this.name);
  }
}

user.sayHi();

// this.name becomes undefined, since setTimeout will recieve the method without
// the user object.
setTimeout(user.sayHi, 500);
// With a wrapper function it works.
setTimeout(() => user.sayHi(), 500);

function func(phrase) {
  l(phrase, this.name);
}
// Using bind so that "this", when calling funcUser, always referes to the user
// object.
let funcUser = func.bind(user);
funcUser("Hello");

// I could do the same thing with a method on the user object, and then use it
// in a timeout. "this" will be bound to the user object.
let say = user.sayHi.bind(user);
say("Yoo");
setTimeout(say, 1000, "Yoooo");

//

{
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "Anders",

    loginOk() {
      l(`${this.name} logged in`);
    },

    loginFail() {
      l(`${this.name} failed to log in`);
    },

  };

  // When passing the arguments, which are methods of the user object, we must
  // bind the user object so that wherever it's called (later in the askPassword
  // function), it will keep its context and "this" will refer to the user object.
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
}
