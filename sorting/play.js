'use strict';

const l = console.log;

// prettier-ignore
const numbers = [1, 5, 6, 34, 6, 34, 7, 9, 10, 2, 6, 8, 30, 23, 76, 333, 234, 1, 3, 5];
const numbersShort = [2, 4, 1];

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

  console.log(newArr);
  return bubbleSort(newArr, swapped);
}

console.log(bubbleSort(numbers));
