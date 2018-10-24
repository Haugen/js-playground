'use strict';

const l = console.log;

let str = 'A very long string that needs to be truncated.';

truncate(str);

function truncate(str = 'string') {
  let [clicker, body, wrapper, stringSpan] = generateHtml();

  let fullString = str;
  stringSpan.innerText = fullString.substring(0, 20);

  wrapper.appendChild(stringSpan);
  wrapper.appendChild(clicker);
  body.appendChild(wrapper);

  clicker.addEventListener('click', function() {
    stringSpan.innerText = fullString;
    clicker.remove();
  });
}

function generateHtml() {
  let clicker = document.createElement('span');
  clicker.setAttribute('id', 'expand');
  clicker.innerText = '...';

  let body = document.querySelector('body');
  let wrapper = document.createElement('div');
  let stringSpan = document.createElement('spam');

  return [clicker, body, wrapper, stringSpan];
}
