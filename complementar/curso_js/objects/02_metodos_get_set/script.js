const cachorro = {
  nome: "",

  setNome: function (nome) {
    this.nome = nome;
  },

  getNome: function () {
    return this.nome;
  },
  latir: function () {
    console.log("au au");
  },

  comer: function () {
    console.log("comendo");
  },
};

cachorro.setNome("Shake");
console.log(cachorro.getNome());
