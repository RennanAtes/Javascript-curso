const { gets } = require('./funcao')



const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for(let i = 0; i <= N; i++ ){
    let numeroAtual = gets()
    if (numeroAtual % 2 == 0 && numeroAtual > maiorNumeroPar ){
        maiorNumeroPar = numeroAtual
    } else if (numeroAtual % 2 == 1 && numeroAtual < menorNumeroImpar){
        menorNumeroImpar = numeroAtual
    } else if (menorNumeroImpar == 0 && numeroAtual % 2 == 1 ){
        menorNumeroImpar = numeroAtual
    }
}  
// TODO: Imprima as saídas conforme o enunciado deste desafio.

console.log(`Maior número par: ${maiorNumeroPar}`);
console.log(`Menor número impar: ${menorNumeroImpar}`)
