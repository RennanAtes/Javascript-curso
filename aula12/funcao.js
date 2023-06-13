numeros = [5,3,4,1,10,8]

let i = 0

function gets(){
    numero = numeros[i]
    i++
    return numero
}

module.exports = {
    gets
}