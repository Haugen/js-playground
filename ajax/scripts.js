'use strict';

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

const l = console.log;
const img = document.querySelector('.dog-container img');
const button = document.querySelector('.get-dog');
const loader = document.querySelector('.loader');
const dogs = [];
const images = [];

init();

function init() {
  pushDogs();
}

// Push a number of dog URLs into dogs array.
function pushDogs() {
  for (let i = 0; i < 5; i++) {
    fetchDog().then(dogUrl => dogs.push(dogUrl));
  }
}

button.addEventListener('click', function(event) {
  printDog();
});

function printDog() {
  img.src = dogs[0];
  dogs.shift();
  fetchDog().then(dogUrl => dogs.push(dogUrl));
}

// Get and return a new dog URL.
function fetchDog() {
  const dog = fetch(DOG_URL)
    .then(response => response.json())
    .then(json => json.message);

  return dog;
}

// Trying to preload full images so there is no delat when changing dog.
function preloadImage(url) {
  let newImage = new Image();
  newImage.src = url;
  return newImage;
  //images.push(newImage);
}
