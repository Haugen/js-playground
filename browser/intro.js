"use strict";

const l = console.log;

// window is the first global object, representing the browser window. It has
// tons of methods and properties on it.

// Getting the height and width of the window.
l(window.innerHeight, window.innerWidth);

// Then there is the document object model (DOM), which gives access to the
// page content.

// setting the background color to red after 1 second.
function bgColor() {
  document.body.style.background = "red";
}
setTimeout(bgColor, 1000);

// Browser Object Model (BOM) are additional objects provided by the browser
// (host environment) to work with everything except the document.
l(navigator); // Info about the browser and OS.
l(location); // Info about the current url.

if (confirm("Go to WIKI?")) {
  location.href = "http://wikipedia.com";
}
