class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let lobo = new Mamifero(4);

console.log(lobo.patas);

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }

  latir() {
    console.log("auau");
  }
}

let pastor = new Cachorro(4, "Pastor Alemão");

console.log(pastor.raca);

console.log(new Cachorro() instanceof Mamifero);
console.log(lobo instanceof Mamifero);
