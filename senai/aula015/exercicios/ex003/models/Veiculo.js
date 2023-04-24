const CompositeAluguel = require("./CompositeAluguel");
const Aluguel = require("./Aluguel");

// Implementação da classe Veiculo que estende o Composite
class Veiculo extends CompositeAluguel {
  constructor(placa, modelo, marca, ano, diaria) {
    super();
    this.placa = placa;
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.idade = this.getIdade();
    this.diaria = diaria;
  }

  getIdade() {
    return new Date().getFullYear() - this.ano;
  }
}
const veiculo1 = new Veiculo("JHK-2518", "Uno", "Fiat", 2015, 75.9);
const veiculo2 = new Veiculo("PBC-5A58", "Gol", "VW", 2018, 99.9);
const veiculo3 = new Veiculo("CCB-2F19", "Celta", "Chevrolet", 2007, 49.9);

const aluguel1 = new Aluguel(1, veiculo1, "2023-04-01", "2023-04-06");
const aluguel2 = new Aluguel(2, veiculo2, "2023-04-01", "2023-04-08");
const aluguel3 = new Aluguel(3, veiculo2, "2023-04-02", "2023-04-07");
const aluguel4 = new Aluguel(4, veiculo3, "2023-04-07", "2023-04-16");
const aluguel5 = new Aluguel(5, veiculo1, "2023-04-08", "2023-04-16");

veiculo1.add(aluguel1);
veiculo1.add(aluguel5);
veiculo2.add(aluguel2);
veiculo2.add(aluguel3);
veiculo3.add(aluguel4);

console.log(veiculo1);
// console.log(veiculo2);
// console.log(veiculo3);
