'use strict';

const l = console.log;

// prettier-ignore
const numbersShort = [1, 2, 4, 1, 7, 19, 23, 4, 6, 9];

const numbers = [];
for (let i = 0; i < 1000; i++) {
  numbers.push(Math.round(Math.random() * 200));
}

/**
 * Quick sort.
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let smaller = [];
  let larger = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      smaller.push(arr[i]);
    } else {
      larger.push(arr[i]);
    }
  }

  return [].concat(quickSort(smaller), pivot, quickSort(larger));
}

let quickSortResult = timer(quickSort, numbers);
console.log('Quick sort: ' + quickSortResult.time, quickSortResult.result);

/**
 * Merge sort.
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let arr1 = arr.splice(0, Math.floor(arr.length / 2));
    return stitch(mergeSort(arr), mergeSort(arr1));
  }
}

// Stitch function, a part of merge sort. Takes two already sorted arrays and return
// a merged sorted array.
function stitch(listOne = [], listTwo = []) {
  let newArr = [];

  while (listOne.length > 0 && listTwo.length > 0) {
    if (listOne[0] < listTwo[0]) {
      newArr.push(listOne.shift());
    } else {
      newArr.push(listTwo.shift());
    }
  }

  newArr = newArr.concat(listOne, listTwo);

  return newArr;
}

let copyNumbers = [...numbers];
let mergeSortResult = timer(mergeSort, copyNumbers);
console.log('Merge sort: ' + mergeSortResult.time, mergeSortResult.result);

/**
 * Insertion sort.
 */
function insertionSort(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (newArr.length === 0) {
      newArr.push(arr[i]);
      continue;
    }
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] < newArr[j]) {
        newArr.splice(j, 0, arr[i]);
        break;
      }
      if (newArr.length === j + 1) {
        newArr.push(arr[i]);
        break;
      }
    }
  }

  return newArr;
}

let insertionSortResult = timer(insertionSort, numbers);
console.log(
  'Insertion sort: ' + insertionSortResult.time,
  insertionSortResult.result
);

/**
 * Old Bubble sort, has some sort of bug in it.
 */
// function bubbleSort(arr, swappedLast = true) {
//   if (!swappedLast) return arr;

//   let swapped = false;
//   let newArr = [...arr];

//   // TODO! There is something wrong with bubble sort atm.
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       newArr[i] = arr[i + 1];
//       newArr[i + 1] = arr[i];
//       swapped = true;
//     }
//   }
//   return bubbleSort(newArr, swapped);
// }

/**
 * New bubble sort, solution from Front End Masters.
 */
function bubbleSort(arr) {
  do {
    var swapped = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

let bubbleSortResult = timer(bubbleSort, numbers);
console.log('Bubble sort: ' + bubbleSortResult.time, bubbleSortResult.result);

/**
 * Simple timer function to check how long each algoritm takes.
 */
function timer(cb, args) {
  let start = new Date();
  let result = cb(args);
  let end = new Date();

  return {
    result,
    time: end - start + 'ms'
  };
}
