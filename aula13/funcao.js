function impostos(salario){
    if (salario <= 1100){
        return salario * 0.95
    } else if ( salario > 1100 && salario <= 2500 ) {
        return salario * 0.90
    } else {
        return salario * 0.85
    }
}

module.exports = {
    impostos
}