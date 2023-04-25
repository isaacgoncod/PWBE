const Composite = require("./Composite");

// Implementação da classe Veiculo que estende o Composite
class Veiculo extends Composite {
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

module.exports = Veiculo;
