numeros = [5,1,3,2,7,8]

let i = 0

function gets(){
    numero = numeros[i]
    i++
    return numero
}

module.exports = {
    gets
}