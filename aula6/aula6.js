

class Carros{
    marca;
    cor;
    gasto_combustivel_medio;


    constructor(marca,cor,gasto_combustivel_medio,distancia,preco_combustivel){
        this.marca = marca;
        this.cor = cor;
        this.gasto_combustivel_medio = gasto_combustivel_medio; 
    }

    gasto(distancia,preco_combustivel){
        return (`O carro da ${this.marca} para fazer a viagem de ${this.distancia} gastou ${(distancia * preco_combustivel / this.gasto_combustivel_medio).toFixed(2)} `);
    }
    
}

const Golf = new Carros('Golf', 'Azul', 10)

console.log(Golf.gasto(89, 5.78))