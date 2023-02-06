const novoElemento = document.createElement("p");
let texto = document.createTextNode("Utilizando o replaceChild()");

novoElemento.appendChild(texto);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);
