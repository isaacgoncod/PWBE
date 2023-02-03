function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

Cachorro.prototype.latir = function () {
  console.log("auaua");
};

let labrador = new Cachorro("labrador", 4, "branco");

console.log(labrador);

labrador.latir();
