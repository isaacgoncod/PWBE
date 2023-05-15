class Composite {
  constructor() {
    this.parcelas = [];
  }

  add(parcela) {
    this.parcelas.push(parcela);
  }

  remove(id) {
    this.parcelas = this.parcelas.filter((parcela) => parcela.id !== id);
  }
}

module.exports = Composite;
