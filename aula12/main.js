const { gets } = require('./funcao')



n = gets()
let maiorNumeroPar = 0
let menorNumeroImpar = 0
for(let i = 0; i < n; i++ ){
    let numeroAtual = gets()
    if (numeroAtual % 2 == 0 && numeroAtual > maiorNumeroPar ){
        maiorNumeroPar = numeroAtual
    } else if (numeroAtual % 2 == 1 && numeroAtual < menorNumeroImpar){
        menorNumeroImpar = numeroAtual
    } else if (menorNumeroImpar == 0 && numeroAtual % 2 == 1 ){
        menorNumeroImpar = numeroAtual
    }
}

console.log(maiorNumeroPar)
console.log(menorNumeroImpar)