let elemento = document.querySelector("#titulo-principal");

console.log("largura: " + elemento.offsetWidth); //considera as bordas
console.log("Altura: " + elemento.offsetHeight);

console.log("largura: " + elemento.clientWidth);
console.log("Altura: " + elemento.clientHeight);
