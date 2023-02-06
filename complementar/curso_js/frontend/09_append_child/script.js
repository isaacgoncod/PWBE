const novoElemento = document.createElement("p");
let texto = document.createTextNode("Utilizando o appendChild()");

novoElemento.appendChild(texto);

let p = document.querySelector("#container-principal");
let pai = p.parentNode;

pai.appendChild(novoElemento);
