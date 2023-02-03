let pessoa = {
  nome: "Isaac",
};

let pessoa3 = {
  nome: "Isaac",
};

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Gustavo";

console.log(pessoa.nome);

pessoa.nome = "Bruno";

console.log(pessoa2.nome);
