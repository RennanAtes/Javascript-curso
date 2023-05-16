const { impostos } = require('./funcao')

salario = 2000
beneficios = 250
let valor_imposto = impostos(salario)

console.log((valor_imposto + beneficios).toFixed(2))