/*
lista= [1,2,3,4,5]



lista.push('Rennan')

console.log(lista)


console.log(lista[2])

lista.pop()

console.log(lista)

lista.shift()

console.log(lista)

*/
const notas = [6,5,7,9,10];

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++){
    somaDasNotas = somaDasNotas + notas[i]
}
console.log(somaDasNotas)
console.log(somaDasNotas / notas.length)
 