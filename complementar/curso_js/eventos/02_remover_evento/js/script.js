let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");

function msg() {
  console.log("Você clicou");
}

botao1.addEventListener("click", msg);

botao2.addEventListener("click", () => {
  botao1.removeEventListener("click", msg);
});
