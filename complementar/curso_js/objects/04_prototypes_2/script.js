const pessoa = {
  nome: "Isaac",
};

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.nome);

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);
