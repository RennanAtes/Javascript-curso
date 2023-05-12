const rennan = { 
    nome : "Rennan Augusto",
    idade : 19,

    descrever: function () {
        console.log(`O meu nome é ${rennan.nome} e minha idade é ${this.idade}`);
    }
};

const atributo = 'idade';

console.log(rennan['nome'])