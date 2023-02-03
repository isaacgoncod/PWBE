class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log("auau");
  }
}

Cachorro.prototype.raca = "SRD";
Cachorro.prototype.patas = 4;

let labrador = new Cachorro("labrador", "branco");

console.log(labrador.patas);

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);
