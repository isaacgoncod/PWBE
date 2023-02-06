let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let p = document.querySelector("p");

function msg(e) {
  console.log("Voce clicou");
  e.stopPropagation();
}
botao1.addEventListener("click", msg);

p.addEventListener("click", () => {
  console.log("clicou em um parágrafo");
});
