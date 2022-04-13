var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//Pedir tempo em horas e velocidade média em Km/H
//O carro faz 12 Km/L
//3 casas decimais

var tempo = (lines.shift());
var velocidade = (lines.shift());

var desempenho = ((velocidade * tempo)/12);

console.log(desempenho.toFixed(3));