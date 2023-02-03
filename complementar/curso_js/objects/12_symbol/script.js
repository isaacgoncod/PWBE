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

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro("labrador", "branco");

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);
