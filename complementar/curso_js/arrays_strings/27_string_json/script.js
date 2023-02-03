let pessoa  = {
  "nome": "Isaac",
  "idade": 21,
  "hobbies" : ["Video Game", "leitura", "Correr"]
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaTexto2 = JSON.parse(pessoaTexto);

console.log(pessoaTexto2);

