const cachorro = {
  raca: "SRD",
  patas: 4,
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return this.raca;
  },
  latir: function () {
    console.log("auau");
  },
};

let labrador = Object.create(cachorro);

labrador.latir();

labrador.setRaca("labrador");

console.log(labrador.getRaca());
