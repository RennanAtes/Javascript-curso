

function nome(nome){
   return 'O ' + nome;
}


nome('Rennan')


function verificarIdade(idade){
    if (idade >= 18){
        console.log(nome('Rennan')  + ' é maior de idade');
    } else {
        console.log( nome('Rennan') + 'é menor de idade');
    }

}

verificarIdade(15);
verificarIdade(19);