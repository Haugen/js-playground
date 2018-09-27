"use strict";

const l = console.log;

let user = {
  name: "Tobias",
  surName: "Haugen",
  get fullName() {
    return `${this.name} ${this.surName}`;
  },
  // Normal function without get.
  // fullName() {
  //   return `${this.name} ${this.surName}`;
  // }
  set fullName(value) {
    [this.name, this.surName] = value.split(" ");
  }
}

// So instead of having just a normal function, that we'd call by fullName(), we
// just read the property fullName, that is a getter that runs behind the scene.
l(user.fullName);
//l(user.fullName());
user.fullName = "Anders Svensson";
l(user.fullName);

// Using only getter and setter for the local property _name. Properties starting
// with _ should not be accessed directly from outside the scope. Instead, here
// we use user2.name to get the value from property _name.
let user2 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      l("The name is too short");
      return;
    } else {
      this._name = value;
    }
  }
}

user2.name = "Tob";
l(user2.name);
user2.name = "Tobias";
l(user2.name);
