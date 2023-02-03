class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }

  dirigirCarro(km) {
    let litrosConsumidos = km / this.consumo;

    this.gasolinaRestante -= litrosConsumidos;
  }

  abastecerCarro(litros) {
    this.gasolinaRestante += litros;
  }
}

let meuCarro = new Carro("VW", "Preto", 100, 12);

console.log(meuCarro);

meuCarro.dirigirCarro(50);

console.log(meuCarro);

meuCarro.abastecerCarro(5);

console.log(meuCarro);
