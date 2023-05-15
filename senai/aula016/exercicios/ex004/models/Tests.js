const Compra = require('./Compra');
const Parcela = require('./Parcela');

const compras = [
  new Compra(1, '2022-03-25', 'TV LCD 4K 50" LG', 'Jair Santana', 4, 2800.0, 2),
  new Compra(
    2,
    '2022-05-12',
    'TV LCD 4K 50" Sansung',
    'Jurema Santana',
    2,
    3100.0,
    1
  ),
  new Compra(
    3,
    '2022-06-08',
    'TV LCD 4K 50" LG',
    'Mariana Silva',
    3,
    2850.0,
    2
  ),
  new Compra(
    4,
    '2022-02-17',
    'TV LCD 4K 50" Sansung',
    'Marta Oliveira',
    5,
    2899.0,
    1
  ),
];

const vendas = [
  new Parcela(1, compras[0], '2022-04-25', '2022-04-23'),
  new Parcela(2, compras[0], '2022-05-25', '2022-05-24'),
  new Parcela(3, compras[0], '2022-06-25', '2022-06-27'),
  new Parcela(4, compras[0], '2022-07-25', '2022-07-30'),
  new Parcela(5, compras[1], '2022-06-12', '2022-06-12'),
  new Parcela(6, compras[1], '2022-07-12', '2022-07-12'),
  new Parcela(7, compras[2], '2022-07-08', '2022-07-18'),
  new Parcela(8, compras[2], '2022-08-08', '2022-08-08'),
  new Parcela(9, compras[2], '2022-09-08', '2022-09-06'),
  new Parcela(10, compras[3], '2023-03-17', '2023-03-20'),
  new Parcela(11, compras[3], '2023-04-17', '2023-04-22'),
  new Parcela(12, compras[3], '2023-05-17', null),
  new Parcela(13, compras[3], '2023-06-17', null),
  new Parcela(14, compras[3], '2023-07-17', null),
];

compras[0].add(vendas[0]);
compras[0].add(vendas[1]);
compras[0].add(vendas[2]);
compras[0].add(vendas[3]);

compras[1].add(vendas[4]);
compras[1].add(vendas[5]);

compras[2].add(vendas[6]);
compras[2].add(vendas[7]);
compras[2].add(vendas[8]);

compras[3].add(vendas[9]);
compras[3].add(vendas[10]);
compras[3].add(vendas[11]);
compras[3].add(vendas[12]);
compras[3].add(vendas[13]);

// console.log(compras[0]);
// console.log(compras[1]);
// console.log(compras[2]);
// console.log(compras[3]);

compras.forEach((compra) => console.log(compra));
