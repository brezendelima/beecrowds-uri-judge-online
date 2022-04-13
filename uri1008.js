var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var NUM, SALARY, HORAS_TRABALHADAS, VALOR_HORA

//Numero e horas trabalhadas : int
//Valor/hora : float

NUM = parseInt(lines.shift())
HORAS_TRABALHADAS = parseInt(lines.shift())
VALOR_HORA = parseFloat(lines.shift())

SALARY = HORAS_TRABALHADAS * VALOR_HORA

console.log("NUMBER = " + NUM)
console.log("SALARY = " + "U$ " + SALARY.toFixed(2))