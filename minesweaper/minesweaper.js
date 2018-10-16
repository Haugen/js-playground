/*

Minesweaper v. 0.0.1

First attempt at a custom Minesweaper game in vanilla JS. Running into too heavy
computations with this approach, but it feels like a good first attempt. For another
version I need to keep better track of the boards state, to easily calculate the
surrounding number of mines.

*/
'use strict';

const l = console.log;

const battlefield = [];
const hasMines = [];
const hasMinesNr = [];
const gameOn = true;
// Seams like there are bugs if battleWidth and battleHeight are not equal.
const battleWidth = 10;
const battleHeight = 10;
const difficulty = 30; // How many mines, in percentages.
const table = document.querySelector('#battlefield');

// Initialize the game.
init();

l(battlefield);

table.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    let clickedId = event.target.id;
    let clickedElement = document.querySelector(`#${event.target.id}`);
    let clickedCords = clickedId.slice(4).split('');

    if (event.altKey) {
      // Alt key to mark a position instead of clicking it.
      clickedElement.style.backgroundColor =
        clickedElement.style.backgroundColor == 'red' ? 'white' : 'red';
    } else if (battlefield[clickedCords[0]][clickedCords[1]].hasMine) {
      // If the clicked position has a mine.
      showAllMines();
    } else {
      // If the clicked position has no mine, act to fill it.
      l(clickedCords);
      fillPosition(clickedCords);
    }
  }
});

// Tried to do this recursive if the position clicked has 0 surrounding mines, but
// the calculations are too heavy. Need a re-write for that functionality I think.
function fillPosition(chords) {
  let tdId = '#pos-' + chords.join('');
  let element = document.querySelector(tdId);

  let surrounding = getSurroundingNumber(chords);
  let numberOfMines = getNumberOfSurroundingMines(surrounding, hasMines);
  element.innerText = numberOfMines;
}

// Game initiation. Fill the battlefield and the hasMines arrays, then create
// the gameboard in HTML.
function init() {
  // Populate the battlefield array with squares with an x, y position.
  for (let i = 0; i < battleHeight; i++) {
    battlefield[i] = [];
    for (let j = 0; j < battleWidth; j++) {
      battlefield[i].push([i, j]);
      if (_.random(1, 100) < difficulty) {
        battlefield[i][j].hasMine = true;
        hasMines.push([i, j]);
      }
    }
  }

  _.forEach(hasMines, function(chords) {
    hasMinesNr.push(chords.join(''));
  });

  // Create rows and column for the html table.
  for (let i = 0; i < battlefield.length; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < battlefield[i].length; j++) {
      battlefield[i][j].surrounding = getSurroundingNumber([i, j]);
      battlefield[i][j].nrOfSurroundingMines = getNumberOfSurroundingMines2(
        battlefield[i][j].surrounding
      );
      let td = document.createElement('td');
      td.id = 'pos-' + battlefield[i][j];
      td.id = td.id.replace(',', '');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  // Create rows and column for the html table.
  for (let i = 0; i < battlefield.length; i++) {
    for (let j = 0; j < battlefield[i].length; j++) {
      getNumberOfSurroundingMines2(battlefield[i][j].surrounding);
    }
  }
}

// Takes in chords, figures our the 9 surrounding chords.
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

  return surrounding;
}

// Take in the surrounding of the position clicked and figure out how many mines are
// surrounding it. Return that number.
function getNumberOfSurroundingMines(small, large) {
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

function getNumberOfSurroundingMines2(surrounding) {
  let nr = 0;
  let surroundingNumbers = [];

  _.forEach(surrounding, function(chords) {
    surroundingNumbers.push(chords.join(''));
  });

  _.forEach(surroundingNumbers, function(currNr) {
    if (_.includes(hasMinesNr, currNr)) nr++;
  });

  return nr;
}

// End of the game scenario. Instantly display all mines.
function showAllMines() {
  hasMines.forEach(function(col) {
    let colId = '#pos-' + col.join('');
    let td = document.querySelector(colId);
    td.style.color = 'white';
    td.style.backgroundColor = 'red';
    td.innerText = 'X';
  });
}
