const ComponenteParcela = require("./ComponenteParcela");
class Composite extends ComponenteParcela {
  constructor() {
    super();
    this.parcelas = [];
  }

  add(parcela) {
    this.parcelas.push(parcela);
  }

  remove(id) {
    this.parcelas = this.parcelas.filter((parcela) => parcela.id !== id);
  }

  getTotalValorParcela() {
    return this.parcelas.reduce(
      (total, parcela) => total + parcela.getValor(),
      0
    );
  }
}

module.exports = Composite;
