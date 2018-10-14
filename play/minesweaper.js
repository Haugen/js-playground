'use strict';

const l = console.log;

const battlefield = [];
const hasMines = [];
const battleWidth = 10;
const battleHeight = 10;
const difficulty = 20; // % based between 1 and 100, 1 being too easy and 100 impossible.
const table = document.querySelector('#battlefield');

init();

table.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    let clickedId = event.target.id;
    let clickedElement = document.querySelector(`#${event.target.id}`);
    let clickedCords = clickedId.slice(4).split('');

    if (event.altKey) {
      clickedElement.style.backgroundColor =
        clickedElement.style.backgroundColor == 'red' ? 'white' : 'red';
    } else if (battlefield[clickedCords[0]][clickedCords[1]].hasMine) {
      showAllMines();
    } else {
      // Set innerText to the number of mines surrounding this position.
      let numberOfMines = getSurroundingNumber(clickedCords);
      if (numberOfMines === 0) {
      }
      clickedElement.innerText = numberOfMines;
    }
  }
});

function init() {
  // Populate the battlefield array with squares with an x, y position.
  for (let i = 0; i < battleHeight; i++) {
    battlefield[i] = [];
    for (let j = 0; j < battleWidth; j++) {
      battlefield[i].push([i, j]);
      if (Math.random() * (101 - 1) + 1 < difficulty) {
        battlefield[i][j].hasMine = true;
        hasMines.push([i, j]);
      }
    }
  }

  // Create rows and column for the html table.
  for (let i = 0; i < battlefield.length; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < battlefield[i].length; j++) {
      let td = document.createElement('td');
      td.id = 'pos-' + battlefield[i][j];
      td.id = td.id.replace(',', '');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function getSurroundingNumber(chords) {
  let x = +chords[0];
  let y = +chords[1];

  // Get an array with the surrounding chords. Could probably do this a bit neater.
  let surrounding = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1]
  ];

  return findSurroundingMines(surrounding, hasMines);
}

function findSurroundingMines(small, large) {
  // Find how many of the small items are in the large array. I think this can be
  // heavily optimized since it does a lot of calculations each time it's called.
  let numberOfMines = 0;
  large.forEach(function(pos) {
    small.forEach(function(pos2) {
      if (pos[0] === pos2[0] && pos[1] === pos2[1]) {
        numberOfMines++;
      }
    });
  });

  return numberOfMines;
}

function showAllMines() {
  hasMines.forEach(function(col) {
    let colId = '#pos-' + col.join('');
    let td = document.querySelector(colId);
    td.style.color = 'red';
    td.innerText = 'X';
  });
}
