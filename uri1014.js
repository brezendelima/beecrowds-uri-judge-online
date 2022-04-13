const { parse } = require('path');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//X = distância percorrida em Km
//Y = Y Total de combustível gasto, com um dígito após o ponto decimal.
//SAÍDA = CONSUMO COM 3 CASAS DECIMAIS E " km/l"

var X = parseInt(lines.shift());
var Y = parseFloat(lines.shift());

var Z = (X/Y);

console.log(Z.toFixed(3) + " km/l");