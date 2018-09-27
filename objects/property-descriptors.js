"use strict";

const l = console.log;

let user = {
  name: "Tobias",
  age: 32
}

// Setting the property name to be immutable. Enumerable decides if the property
// shows up when the object is iterated, and configurable decides of the
// property can be deleted and the attributes modified. All of them defaults
// to true when created in the normal way, like above.
Object.defineProperty(user, "name", {
  writable: false,
  enumerable: true,
  configurable: true,
})

// When creating a new property like this, all property desciptors defaults to false.
Object.defineProperty(user, "items", {
  value: ["first", "second"],
  enumerable: true,
})

// Prevent age to be included when properties are iterated over.
Object.defineProperty(user, "age", {
  enumerable: false,
})
for (let key in user) {
  l(key, user[key]);
}

// Error. Cannot assign to read only property.
// user.name = "Fredrik";

l(Object.getOwnPropertyDescriptor(user, "name"));
l(Object.getOwnPropertyDescriptor(user, "items"));

// A non configurable property, like Math.PI, cannot be deleted or changed. Once
// a property is non-configurable, there is no way to reverse it.
l(Object.getOwnPropertyDescriptor(Math, 'PI'));

l(Object.getOwnPropertyDescriptors(user));
