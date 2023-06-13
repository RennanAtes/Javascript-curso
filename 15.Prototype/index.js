const pessoa = {
    genero : 'masculino'
}

const rennan = {
    nome: 'Rennan',
    idade: 19,
    __proto__: pessoa
}

console.log(rennan.genero)


function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}
    
const Rennan = new Pessoa('Rennan', 19)
console.log(Rennan)
Rennan.falar()

/// Outra forma de escrever.
class Pessoa {

    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)

    }
}