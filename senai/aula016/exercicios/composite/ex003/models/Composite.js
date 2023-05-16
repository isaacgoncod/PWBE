class Composite {
  constructor() {
    this.alugueis = [];
  }

  add(aluguel) {
    this.alugueis.push(aluguel);
  }

  remove(id) {
    this.alugueis = this.alugueis.filter((aluguel) => aluguel.id !== id);
  }
}

module.exports = Composite;
