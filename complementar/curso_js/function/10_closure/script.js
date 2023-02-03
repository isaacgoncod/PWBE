const lembrarSoma = (x) => {
  return (y) => {
    return x + y;
  };
};

let soma1 = lembrarSoma(2);

console.log(soma1(5));

let soma2 = lembrarSoma(5);

console.log(soma1(7));

const contador = (i) => {
  let cont = i;

  let somarContador = () => {
    console.log(cont);
    cont++;
  };
  return somarContador;
};

let meuContador = contador(5);
meuContador();
