const promise = Promise.resolve(new Error("Algo deu errado"));

console.log("teste");

promise
  .then((value) => console.log(value))
  .catch((reason) => console.log("Falhou: " + reason));
