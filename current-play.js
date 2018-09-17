"use strict";

let user = {
  name: "Tobias",
  age: 32,
  doubleAge: () => user.age * 2,
  [2 + 2]: "expressions in keys",
};

console.log(user.name);
console.log(user.age);
console.log(user.doubleAge());

// Assigned variables can be used with brackets to locate keys.
let key = "age";
console.log(user[key]);

// Setting and deleting keys on objects.
user.isAdmin = true;
delete user.name;

console.log(user);
