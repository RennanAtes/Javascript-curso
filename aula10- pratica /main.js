
const {gets,print} = require('./funcao')

const numerosSorteados = [];

for (let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados);

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length ; i++){
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);