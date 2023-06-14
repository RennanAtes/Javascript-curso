function soma(x) {
    return (y) => {
        return x + y;
    }
}

const SomaParcial = soma(20)


console.log(SomaParcial(50))
console.log(SomaParcial(70))