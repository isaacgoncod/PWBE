class Compra {
  constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
    (this.id = id),
      (this.data = new Date(data)),
      (this.produto = produto),
      (this.cliente = cliente),
      (this.totalParcelas = totalParcelas),
      (this.preco = preco),
      (this.quantidade = quantidade),
      (this.total = this.getTotal());
  }

  getTotal() {
    return Number((this.preco * this.quantidade).toFixed(2));
  }
}

module.exports = Compra;
