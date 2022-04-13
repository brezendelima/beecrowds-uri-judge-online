var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = 60;
var Y = 90;

var distância = parseInt(lines.shift());

var tempo = (distância * 2);

console.log(tempo + " minutos");