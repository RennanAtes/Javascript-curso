function gets(media){
    if(media < 5 ){
        return 'Reprovado'
    } else if (media > 5 && media < 7){
        return 'Recuperacao'
    } else{
        return 'Aprovado'
    }
}

module.exports = {
    gets
}