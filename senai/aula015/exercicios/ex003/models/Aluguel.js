class Aluguel {
  constructor(id, veiculo, dataRetirada, dataDevolucao) {
    (this.id = id),
      (this.veiculo = veiculo),
      (this.dataRetirada = dataRetirada),
      (this.dataDevolucao = dataDevolucao);
    this.valorAluguel = this.getValor();
  }

  getDias() {
    let dataDev = new Date(this.dataDevolucao);
    let dataRet = new Date(this.dataRetirada);

    let diferenceDay = dataDev.getTime() - dataRet.getTime();
    let days = diferenceDay / (1000 * 3600 * 24);

    return days;
  }

  getValor() {
    return Number((this.veiculo.diaria * this.getDias()).toFixed(2));
  }
}

module.exports = Aluguel;
