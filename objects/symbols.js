"use strict";

const l = console.log;

// Symbols neve convert to strings automatically, but can be converted manually.
let id = Symbol("ID symbol");
//l(typeof String(id));

let user = {
  name: "Tobias",
}

// Symbols are always unique, and both values will be stored with "identical"
// keys.
let x = Symbol("ID");
let y = Symbol("ID");
user[x] = 5;
user[y] = 6;

// Just using normals strings will replaces eachother. Only "key: 10" will be
// stored.
let a = "key";
let b = "key";
user[a] = 5;
user[b] = 10;

l(user);
l(Object.getOwnPropertySymbols(user));

// Symbols can be accessed directly but are skipped in for..in loops.
// Object.assign copies both properties and symbols.
for (let key in user) {
  l(user[key]);
}

// .for registers Symbols in a global registry. If it's not there, create it.
// Otherwise reference the same symbol in a new variable.
let globalId = Symbol.for("ID");
let anotherId = Symbol.for("ID");
l(globalId === anotherId); // True

// Look up name for global symbols.
l(Symbol.keyFor(globalId));
