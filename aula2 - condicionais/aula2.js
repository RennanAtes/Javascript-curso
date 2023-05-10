const numero = 5;
const parOuImpar = (numero % 2) === 0;

/*
if (numero === 0 ){
    console.log('O numero é inválido');
} else if (parOuImpar) {
    console.log('O numero é par');
} else {
    console.log('O numero é impar');
}
*/

const etanol = 3.23;
const gasolina = 5.79;
const combustivelCarro = 'combustivel';
const CombustivelPorKM = 10;
const viagemDistancia = 79;

let mediaDeCombustivel = viagemDistancia / CombustivelPorKM;
if(combustivelCarro == 'gasolina'){
    console.log((mediaDeCombustivel * gasolina).toFixed(2));
} else if (combustivelCarro == 'etanol') {
    console.log((mediaDeCombustivel * etanol).toFixed(2));
}