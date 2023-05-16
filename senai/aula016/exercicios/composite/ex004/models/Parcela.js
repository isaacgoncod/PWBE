class Parcela {
  constructor(id, compra, dataVencimento, dataPagamento) {
    (this.id = id),
      (this.compra = compra),
      (this.dataVencimento = new Date(dataVencimento)),
      (this.dataPagamento = new Date(dataPagamento)),
      (this.valorParcela = this.getValorParcela()),
      (this.juros = this.getJuros());
  }

  getValorParcela() {
    return Number((this.compra.total / this.compra.totalParcelas).toFixed(2));
  }

  getDiasAtraso() {
    let diferenceDay =
      this.dataPagamento.getTime() - this.dataVencimento.getTime();
    let days = diferenceDay / (1000 * 3600 * 24);

    return days;
  }

  getJuros() {
    let juros =
      this.getDiasAtraso() > 0
        ? Number(
            (
              this.getValorParcela() +
              this.getDiasAtraso() * (this.getValorParcela() * 0.01)
            ).toFixed(2)
          )
        : null;

    return juros;
  }
}

module.exports = Parcela;
