const Composite = require("./Composite");

class Compra extends Composite {
  constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
    super(),
      (this.id = id),
      (this.data = data),
      (this.produto = produto),
      (this.cliente = cliente),
      (this.totalParcelas = totalParcelas),
      (this.preco = preco),
      (this.quantidade = quantidade),
      (this.total = this.getTotal());
  }

  getTotal() {
    return this.preco * this.quantidade;
  }
}

module.exports = Compra;
