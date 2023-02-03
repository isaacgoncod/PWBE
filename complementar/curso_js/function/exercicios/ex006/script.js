function tipoDeDado(dado) {
  if (typeof dado === "number") {
    console.log("Este dado é um Number");
  } else if (typeof dado === "boolean") {
    console.log("Este dado é um Boleano");
  } else if (typeof dado === "string") {
    console.log("Este dado é uma String");
  } else {
    console.log("Dado incompativel");
  }
}

tipoDeDado(true);
tipoDeDado(10);
tipoDeDado("20");
