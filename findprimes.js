"use strict";

next: for (let i = 2; i < 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue next;
    }
  }
  console.log(i);
}
