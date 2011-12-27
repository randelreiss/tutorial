// Get a reference to the element.
var elem = document.getElementById('myCanvas');

// Always check for properties and methods, to make sure your code doesn't break 
// in other browsers.
if (elem && elem.getContext) {

  // Get the 2d context.
  // Remember: you can only initialize one context per element.
  var context = elem.getContext('2d');
  if (context) {
    context.fillStyle    = '#00f';
    context.font         = 'italic 30px sans-serif';
    context.textBaseline = 'top';
    context.fillText  ('Hello world!', 0, 0);
    context.font         = 'bold 30px sans-serif';
    context.strokeText('Hello world!', 0, 50);
  } else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
  }
}