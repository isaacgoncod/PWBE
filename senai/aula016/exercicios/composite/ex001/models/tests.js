const Veiculo = require("./Veiculo");
const Aluguel = require("./Aluguel");

const veiculos = [
  new Veiculo("JHK-2518", "Uno", "Fiat", 2015, 75.9),
  new Veiculo("PBC-5A58", "Gol", "VW", 2018, 99.9),
  new Veiculo("CCB-2F19", "Celta", "Chevrolet", 2007, 49.9),
];

const alugueis = [
  new Aluguel(1, veiculos[0], "2023-04-01", "2023-04-06"),
  new Aluguel(2, veiculos[1], "2023-04-01", "2023-04-08"),
  new Aluguel(3, veiculos[1], "2023-04-02", "2023-04-07"),
  new Aluguel(4, veiculos[2], "2023-04-07", "2023-04-16"),
  new Aluguel(5, veiculos[0], "2023-04-08", "2023-04-16"),
];

console.log(alugueis);
