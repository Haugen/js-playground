"use strict";

const l = console.log;

let arr = ["Tobias", "Anders"];

let [user1, user2] = arr;

let [first, last] = "Tobias Haugen".split(" ");

l(first);
l(last);

let users = new Set([
  { name: "Tobias", age: 32 },
  { name: "Anders", age: 32 }
])

l(users);

[user1, user2] = users;

l(user1);
l(user2);
