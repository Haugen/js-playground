'use strict';

const l = console.log;

/**
 * Own implementation of Array for practice.
 */
class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length > 0) {
      let item = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return item;
    }
  }

  get(index) {
    if (index > 0 && index < this.length) return this.data[index];
    throw new Error('Index not found in array.');
  }

  delete(index) {
    if (index > 0 && index < this.length) {
      let item = this.data[index];
      delete this.data[index];
      this._shift(index);
      return item;
    } else {
      throw new Error('Index not found in array.');
    }
  }

  _shift(index) {
    for (let i = index + 1; i <= this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

let arr = new ArrayList();

arr.push(10);
arr.push(11);
arr.push(12);
arr.push(13);
arr.push(14);
arr.push(15);
arr.push(16);
arr.pop();
arr.get(5);
arr.delete(2);
arr.delete(1);

l(arr.data);
