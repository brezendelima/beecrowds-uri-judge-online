var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var area, raio;
var pi = 3.14159;
raio = parseFloat(lines.shift());

area = pi * (raio*raio);

console.log('A=' + area.toFixed(4));