function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.latir = function () {
    console.log("auau");
  };
}

let labrador = new Cachorro("labrador", 4, "branco");

console.log(labrador);
