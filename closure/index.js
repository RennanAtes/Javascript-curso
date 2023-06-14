function soma(x) {
    return (y) => {
        return x + y;
    }
}

const SomaParcial = soma(20)


console.log(SomaParcial(50))
console.log(SomaParcial(70))


const pessoa = {
    nome : 'Rennan',
    idade : 19
}
function gritar(prefixo) {
    console.log(prefixo, this.nome)
}


gritar.call(pessoa, 'Olaaaa')