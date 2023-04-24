const Compra = require("./Compra");

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

const compra1 = new Compra(
  1,
  "2022-25-03",
  'TV LCD 4K 50" LG',
  "Jair Santana",
  4,
  2800.0,
  2
);
const compra2 = new Compra(
  2,
  "2022-05-12",
  'TV LCD 4K 50" Sansung',
  "Jurema Santana",
  2,
  3100.0,
  1
);
const compra3 = new Compra(
  3,
  "2022-06-08",
  'TV LCD 4K 50" LG',
  "Mariana Silva",
  3,
  2850.0,
  2
);
const compra4 = new Compra(
  4,
  "2022-02-17",
  'TV LCD 4K 50" Sansung',
  "Marta Oliveira",
  5,
  2899.0,
  1
);

const venda1 = new Parcela(1, compra1, "2022-04-25", "2022-04-23");
const venda2 = new Parcela(2, compra1, "2022-05-25", "2022-05-24");
const venda3 = new Parcela(3, compra1, "2022-06-25", "2022-06-27");
const venda4 = new Parcela(4, compra1, "2022-07-25", "2022-07-30");

const venda5 = new Parcela(5, compra2, "2022-06-12", "2022-06-12");
const venda6 = new Parcela(6, compra2, "2022-07-12", "2022-07-12");

const venda7 = new Parcela(7, compra3, "2022-07-08", "2022-07-18");
const venda8 = new Parcela(8, compra3, "2022-08-08", "2022-08-08");
const venda9 = new Parcela(9, compra3, "2022-09-08", "2022-09-06");

const venda10 = new Parcela(10, compra4, "2023-03-17", "2023-03-20");
const venda11 = new Parcela(11, compra4, "2023-04-17", "2023-04-22");
const venda12 = new Parcela(12, compra4, "2023-05-17", null);
const venda13 = new Parcela(13, compra4, "2023-06-17", null);
const venda14 = new Parcela(14, compra4, "2023-07-17", null);

// console.log(venda1);
// console.log(venda2);
// console.log(venda3);
// console.log(venda4);

// console.log(venda5);
// console.log(venda6);

// console.log(venda7);
// console.log(venda8);
// console.log(venda9);

console.log(venda10);
console.log(venda11);
console.log(venda12);
console.log(venda13);
console.log(venda14);
