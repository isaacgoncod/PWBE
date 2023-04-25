const Compra = require("./Compra");
const Parcela = require("./Parcela");

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

compra1.add(venda1);
compra1.add(venda2);
compra1.add(venda3);
compra1.add(venda4);

compra2.add(venda5);
compra2.add(venda6);

compra3.add(venda7);
compra3.add(venda8);
compra3.add(venda9);

compra4.add(venda10);
compra4.add(venda11);
compra4.add(venda12);
compra4.add(venda13);
compra4.add(venda14);

console.log(compra1);
console.log(compra2);
console.log(compra3);
console.log(compra4);
