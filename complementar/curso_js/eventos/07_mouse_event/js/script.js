let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");

botao1.addEventListener("mousedown", () => {
  console.log("apertou o botao");
});

botao1.addEventListener("mouseup", () => {
  console.log("soltou o botao");
});

botao2.addEventListener("dblclick", () => {
  console.log("clicou duas vezes");
});

botao2.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("botao direito");
});
