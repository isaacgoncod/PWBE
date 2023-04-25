const ComponenteAluguel = require("./ComponenteAluguel");
// Implementação do Composite para a lista de aluguéis
class Composite extends ComponenteAluguel {
  constructor() {
    super();
    this.alugueis = [];
  }

  add(aluguel) {
    this.alugueis.push(aluguel);
  }

  remove(id) {
    this.alugueis = this.alugueis.filter((aluguel) => aluguel.id !== id);
  }

  getTotalValorAluguel() {
    return this.alugueis.reduce(
      (total, aluguel) => total + aluguel.getValor(),
      0
    );
  }
}

module.exports = Composite;
