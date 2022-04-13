var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = (lines.shift());
var Y = (lines.shift());

var PROD = (X * Y);

console.log("PROD = " + PROD);