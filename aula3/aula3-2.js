


const valorProduto = 90;
const debitoDesconto = 0.90;
const pixDesconto = 0.85;
const DuasVezes = valorProduto;
const acimaDeDuasVezes = 1.10;

const metodoDePagamento = '3';

if (metodoDePagamento == 'Pix') {
    console.log(valorProduto * pixDesconto)
} else if (metodoDePagamento == 'Debito') {
    console.log(valorProduto * debitoDesconto)
} else if (metodoDePagamento == 2) {
    console.log(valorProduto)
} else if (metodoDePagamento > 2 ) {
    console.log(valorProduto * acimaDeDuasVezes)
} else {
    console.log('error')
}