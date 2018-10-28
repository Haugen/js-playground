'use strict';

const l = console.log;

// prettier-ignore
const numbers = [1, 5, 6, 34, 6, 34, 7, 9, 10, 2, 6, 8, 30, 23, 76, 333, 234, 1, 3, 5];
const numbersShort = [1, 2, 4, 1, 7];

// Merge sort
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
console.log('Merge sort: ', mergeSort(copyNumbers));

// My first try at insertion sort. A bit more challenging than bubble sort.
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

console.log('Insertion sort: ', insertionSort(numbers));

// Trying out my own custom bubble sort.
function bubbleSort(arr, swappedLast = true) {
  if (!swappedLast) return arr;

  let swapped = false;
  let newArr = [...arr];

  // TODO! There is something wrong with bubble sort atm.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      newArr[i] = arr[i + 1];
      newArr[i + 1] = arr[i];
      if (!swapped) swapped = true;
    }
  }

  return bubbleSort(newArr, swapped);
}

console.log('Bubble sort: ', bubbleSort(numbers));
