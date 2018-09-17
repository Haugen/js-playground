"use strict";

const l = console.log;

let user = {
  name: "Tobias",
  age: 32,
  doubleAge: () => user.age * 2,
  [2 + 2]: "expressions in keys",
};

// Assigned variables can be used with brackets to locate keys.
let newAge = "age"; // works for: user[newAge] == user.age.

// Setting and deleting keys on objects.
user.isAdmin = true;
//delete user.name;

function makeUser(name, age) {
  return {
    // Shorthand for "user: user" and "age: age".
    name,
    age,
  };
}

let user2 = makeUser("Fredrik", 30);
//l("age" in user2); // Returns undefined if property doesn't exsist.

for (let key in user2) {
  //console.log(key, user2[key]);
}

// Objects, as opposed to primitives, are copied by reference.
let newUser = user2;
newUser.name = "Anders";
// l(user2.name); // Will be changed to Anders.

let obj = {
  name: "Object",
  size: 40,
  properties: {
    color: "blue",
    weight: 860
  }
}

let clone = Object.assign({}, obj);

l(obj.properties === clone.properties);
l(obj === clone);

obj.properties = 5;

l(clone.properties);
l(obj.properties);
