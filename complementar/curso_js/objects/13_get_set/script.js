class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  set setCor(cor) {
    this.cor = cor;
  }

  get getCor() {
    return this.cor;
  }

  latir() {
    console.log("auau");
  }
}

let pastor = new Cachorro("Pastor Alemão", "");

console.log(pastor);

pastor.setCor = "Preto";

console.log(pastor);
console.log(pastor.getCor);
