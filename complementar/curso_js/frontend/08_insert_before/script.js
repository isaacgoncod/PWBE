const novoElemento = document.createElement("p");
const elementoAlvo = document.querySelector("#titulo-principal");
const elementoPai = document.querySelector("#container-principal");

let texto = document.createTextNode("Algum Texto");
novoElemento.append(texto);

elementoPai.insertBefore(novoElemento, elementoAlvo);
