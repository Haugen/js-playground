"use strict";

const l = console.log;

let children = document.body.children;

for (let i = 0; i < children.length; i++) {
  //l(children[0]);
}

let arrChildren = Array.from(children);
//l(arrChildren);

for (let child of children) {
  //l(child);
}

//

l(document.body.children[0]);
l(document.body.children[1]);
l(document.body.children[1].lastElementChild);

//

let table = document.body.children[2];

// Color the cells in a diagonal.
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i]
  //row.cells[i].style.background = "red";
}

//

let tds = document.getElementsByTagName('td');

// Another solution for coloring a diagonal.
for (let i = 0; i < tds.length; i++) {
  if (i == 0 || i % 6 == 0) {
    tds[i].style.background = "red";
  }
}

// A common and powerful selector i querySelectorAll. Returns everything that
// fits a given CSS selector.
let lastTds = document.querySelectorAll("table tr td:last-child");
for (let td of lastTds) {
  l(td);
}
