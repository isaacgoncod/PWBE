function tamanhoDoTexto(texto) {
  if (texto.length > 10) {
    console.log("Texto Muito longo");
  } else {
    console.log("Texto dentro do limite");
  }

  console.log(texto.length)
}

tamanhoDoTexto("Texto");
tamanhoDoTexto("Isaac Cordeiro Gonçalves");
