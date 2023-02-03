function checarNumero(num) {
  let number = Number(num);

  if (Number.isNaN(number)) {
    alert("Por favor, insira somente números no app");
  } else {
    return number;
  }
}

checarNumero(5);
checarNumero("teste");

let number = prompt("Digite um número");

checarNumero(number);
