'use strict';

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

const l = console.log;
const imgContainer = document.querySelector('.dog-container');
const button = document.querySelector('.get-dog');
const loader = document.querySelector('.loader');
const images = [];

pushDogs();

// Push a number of dog URLs into dogs array.
function pushDogs() {
  for (let i = 0; i < 10; i++) {
    fetchDog();
  }
}

// Print a new dog on every button click.
button.addEventListener('click', function(event) {
  printDog();
});

// Now printDog removes an element, add a new one, removes an image from the cache,
// and fetches a new dog. Maybe too much?
function printDog() {
  const img = imgContainer.querySelector('img');
  imgContainer.removeChild(img);
  imgContainer.appendChild(images[0]);
  images.shift();
  fetchDog();
}

// Get a new dog URL and create an image.
function fetchDog() {
  const dog = fetch(DOG_URL)
    .then(response => response.json())
    .then(json => json.message)
    .then(url => preloadImage(url));

  return dog;
}

// Creating a new img element with a given url as src.
function preloadImage(url) {
  let newImage = new Image();
  newImage.src = url;
  images.push(newImage);
}
