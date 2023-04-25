class Parcela {
  constructor(id, compra, dataVencimento, dataPagamento) {
    (this.id = id),
      (this.compra = compra),
      (this.dataVencimento = dataVencimento),
      (this.dataPagamento = dataPagamento),
      (this.valorParcela = this.getValorParcela()),
      (this.juros = this.getJuros());
  }

  getValorParcela() {
    return this.compra.total / this.compra.totalParcelas;
  }

  getDiasAtraso() {
    let dataPag = new Date(this.dataPagamento);
    let dataVen = new Date(this.dataVencimento);

    let diferenceDay = dataPag.getTime() - dataVen.getTime();
    let days = diferenceDay / (1000 * 3600 * 24);

    return days;
  }

  getJuros() {
    if (this.getDiasAtraso() > 0) {
      return (
        this.getValorParcela() +
        this.getDiasAtraso() * (this.getValorParcela() * 0.01)
      );
    } else {
      return null;
    }
  }
}

module.exports = Parcela;
