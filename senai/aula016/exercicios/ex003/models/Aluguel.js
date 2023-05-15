class Aluguel {
  constructor(id, veiculo, dataRetirada, dataDevolucao) {
    (this.id = id),
      (this.veiculo = veiculo),
      (this.dataRetirada = new Date(dataRetirada)),
      (this.dataDevolucao = new Date(dataDevolucao));
    this.valorAluguel = this.getValor();
  }

  getDias() {
    let diferenceDay =
      this.dataDevolucao.getTime() - this.dataRetirada.getTime();
    let days = diferenceDay / (1000 * 3600 * 24);

    return days;
  }

  getValor() {
    return Number((this.veiculo.diaria * this.getDias()).toFixed(2));
  }
}

module.exports = Aluguel;
