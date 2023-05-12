class Pessoa{
    nome;
    peso;
    altura;
    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(){
        return `O IMC do ${this.nome} é ${this.peso / (this.altura * this.altura)}`;
    }

}

const Rennan = new Pessoa('Rennan',57, 1.70);

console.log(Rennan.imc());


const Jose = new Pessoa('Jose', 70, 1.75);

console.log(Jose.imc());
