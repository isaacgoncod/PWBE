class Veiculo {
  constructor(placa, modelo, marca, ano, diaria) {
    (this.placa = placa),
      (this.modelo = modelo),
      (this.marca = marca),
      (this.ano = ano),
      (this.idade = this.getIdade()),
      (this.diaria = diaria);
  }

  getIdade() {
    return new Date().getFullYear() - Number(this.ano);
  }
}

module.exports = Veiculo;
