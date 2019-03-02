'use strict';

const ORIGINAL_URL = 'https://dog.ceo/api/breeds/image/random';
const BREEDS = 'https://dog.ceo/api/breeds/list/all';

let dogUrl = ORIGINAL_URL;

const imgContainer = document.querySelector('.dog-container');
const button = document.querySelector('.get-dog');
const loader = document.querySelector('.loader');
const breedSelect = document.querySelector('#breeds');
const breedContainer = document.querySelector('.breed-select');
let images = [];
const maxHeight =
  window.innerHeight - button.clientHeight - breedContainer.clientHeight - 60;
const maxWidth = window.innerWidth - 20;
imgContainer.style.height = maxHeight + 'px';

loadBreeds();
pushDogs();

// Push a number of dog URLs into dogs array.
function pushDogs() {
  for (let i = 0; i < 10; i++) {
    fetchDog();
  }
}

async function loadBreeds() {
  const response = await fetch(BREEDS);
  if (breeds) {
    const breeds = await response.json();
    for (let [key, value] of Object.entries(breeds.message)) {
      let option = document.createElement('option');
      option.text = key.charAt(0).toUpperCase() + key.slice(1);
      option.value = key;
      breedSelect.append(option);
      if (value.length > 0) {
        value.forEach(subBreed => {
          let subOption = document.createElement('option');
          subOption.text =
            '- ' + subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
          subOption.value = key + '/' + subBreed;
          breedSelect.append(subOption);
        });
      }
    }
  }
}

// Print a new dog on every button click.
button.addEventListener('click', function(event) {
  printDog();
});

// Listen on change of breed.
breedSelect.addEventListener('change', function(event) {
  const breed = event.target.value;
  if (breed === 'all') {
    dogUrl = 'https://dog.ceo/api/breeds/image/random';
  } else {
    dogUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
  }
  images = [];
  pushDogs();
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
  const dog = fetch(dogUrl)
    .then(response => response.json())
    .then(json => json.message)
    .then(url => preloadImage(url));

  return dog;
}

// Creating a new img element with a given url as src.
function preloadImage(url) {
  let newImage = new Image();
  newImage.src = url;
  newImage.style.maxHeight = `${maxHeight}px`;
  newImage.style.maxWidth = `${maxWidth}px`;
  images.push(newImage);
}
