var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A, B, SOMA;
A = parseInt(lines.shift());
B = parseInt(lines.shift());

SOMA = (A + B);

console.log("SOMA = " + SOMA);
