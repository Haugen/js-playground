"use strict";

const l = console.log;

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed = 1) {
    this.speed += speed;
    l(`${this.name} now running with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    l(`${this.name} stopped!`);
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    l(`${this.name} now hides.`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit", 10);
rabbit.run(3);
rabbit.run();
rabbit.run(2);
rabbit.stop();
l(rabbit.earLength);
