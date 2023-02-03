const soma = (a, b) => {
  if (a === undefined || b === undefined) {
    console.log("Esta função precisa ter os dois argumentos");
  } else {
    return a + b;
  }
};

soma(1);
console.log(soma(1, 2));

const saudacao = (nome, idade) => {
  if (idade === undefined) {
    console.log("Ola " + nome);
  } else {
    console.log("Ola " + nome + " Você tem " + idade + " anos");
  }
};

saudacao("Isaac");

saudacao("Isaac", 21);
