const lista = [1,2,3,4,5,6,7,8,9,10]

lista.forEach((value,i, listRef) => {
    console.log(value + i)
})



const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0)
})


console.log(listaDeNumerosPares)


////////////////////////////////////////////////////////////////

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const listaPessoas = [new Pessoa('Rennan'), new Pessoa('Augusto')]

console.log(listaPessoas)

const listaNomes = listaPessoas.map((element) => element.nome )

console.log(listaNomes)


////////////////////////////////////////////////////////////////


const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    return previous + current
}, 0)
console.log(somaDeTodosOsNumeros)