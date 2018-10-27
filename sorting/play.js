'use strict';

const l = console.log;

// prettier-ignore
const numbers = [1, 5, 6, 34, 6, 34, 7, 9, 10, 2, 6, 8, 30, 23, 76, 333, 234, 1, 3, 5];
const numbersShort = [1, 2, 4, 1, 7];

// My first try at insertion sort. A bit more challenging than bubble sort, and I'm
// not sure if it's a
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

console.log(insertionSort(numbers));

// Trying out my own custom bubble sort.
function bubbleSort(arr, swappedLast = true) {
  if (!swappedLast) return arr;

  let swapped = false;
  let newArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      newArr[i] = arr[i + 1];
      newArr[i + 1] = arr[i];
      if (!swapped) swapped = true;
    }
  }

  return bubbleSort(newArr, swapped);
}

// console.log(bubbleSort(numbers));
