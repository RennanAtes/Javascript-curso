class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`O meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}




function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Rennan = new Pessoa('Rennan', 19)
const Gustavo = new Pessoa('Gustavo', 16)

compararPessoas(Rennan,Gustavo)