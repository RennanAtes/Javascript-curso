function tabuada(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num}x${i}=${num*i}`)
    }
}


tabuada(10)

console.log('-------------------')


listaNumeros = [2,3,1,2,4,1,24,12,5,21,5,65,64,645,62,47,2,1,5]


function numberPar(numeros){
    for(let i = 0; i < numeros.length; i++ ){
        if (numeros[i] % 2 == 0){
            console.log(`${numeros[i]} é par`)
        } else{
            console.log(`${numeros[i]} é impar`)
        }
    }
}

numberPar(listaNumeros)


console.log('---------')


for(itens in listaNumeros){
    console.log(itens)
}
