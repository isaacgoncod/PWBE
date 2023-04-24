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

    let diferenceDay = dataDev.getTime() - dataRet.getTime();
    let days = diferenceDay / (1000 * 3600 * 24);

    return days;
  }

  getValor() {
    return Number((this.veiculo.diaria * this.getDias()).toFixed(2));
  }
}
const veiculo1 = new Veiculo("JHK-2518", "Uno", "Fiat", 2015, 75.9);
const veiculo2 = new Veiculo("PBC-5A58", "Gol", "VW", 2018, 99.9);
const veiculo3 = new Veiculo("CCB-2F19", "Celta", "Chevrolet", 2007, 49.9);

const aluguel1 = new Aluguel(1, veiculo1, "2023-04-01", "2023-04-06");
const aluguel2 = new Aluguel(2, veiculo2, "2023-04-01", "2023-04-08");
const aluguel3 = new Aluguel(3, veiculo2, "2023-04-02", "2023-04-07");
const aluguel4 = new Aluguel(4, veiculo3, "2023-04-07", "2023-04-16");
const aluguel5 = new Aluguel(5, veiculo1, "2023-04-08", "2023-04-16");

console.log(aluguel1);
console.log(aluguel2);
console.log(aluguel3);
console.log(aluguel4);
console.log(aluguel5);
