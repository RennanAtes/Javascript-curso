const rennan = { 
    nome : "Rennan Augusto",
    idade : 19,

    descrever: function () {
        console.log(`O meu nome é ${rennan.nome} e minha idade é ${this.idade}`);
    }
};

rennan.altura = 1.70;

console.log(rennan.idade);

delete rennan.idade;

console.log(rennan);

rennan.idade = 19
console.log(rennan.descrever());