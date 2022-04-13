var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//Ler código, número e valor da peça 1
//Ler código, número e valor da peça 2
//int, int, float com 2 decimais

var primeiro = lines.shift().split(' ');

var segundo = lines.shift().split(' ');

var Peca1 = parseInt(primeiro[0]); var quant1 = parseInt(primeiro[1]); var valorUni1 = parseFloat(primeiro[2]);

var Peca2 = parseInt(segundo[0]); var quant2 = parseInt(segundo[1]); var valorUni2 = parseFloat(segundo[2]);

console.log("VALOR A PAGAR: R$ " + parseFloat((quant1 * valorUni1)+(quant2 * valorUni2)).toFixed(2));
