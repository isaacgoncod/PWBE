const Veiculo = require("./Veiculo");

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

    return dataDev.getDate() - dataRet.getDate();
  }

  getValor() {
    return Number((this.veiculo.diaria * this.getDias()).toFixed(2));
  }
}

const aluguel = new Aluguel(
  1,
  new Veiculo("DAY5678", "Marea", "Fiat", 2010, 50.5),
  "2023-01-20",
  "2023-01-30"
);

console.log(aluguel);
