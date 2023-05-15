const { gets } = require('./funcao')



n = gets()
let maiorNumeroPar = 0
let maiorNumeroImpar = 0
for(let i = 0; i < n; i++ ){
    numeroAtual = gets()
    if (numeroAtual % 2 == 0 && numeroAtual > maiorNumeroPar ){
        maiorNumeroPar = numeroAtual
    } else if (numeroAtual % 1 == 0 && numeroAtual > maiorNumeroImpar){
        maiorNumeroImpar = numeroAtual
    }
}

console.log(maiorNumeroPar)
console.log(maiorNumeroImpar)