var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A, B, X;

//ENTRADA
A = parseInt(lines.shift());
B = parseInt(lines.shift());

//PROCESSAMENTO
X = A + B;

//SAÍDA
console.log("X = " + X);