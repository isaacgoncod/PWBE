let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");

function msg(e) {
  console.log(e);
}

botao1.addEventListener("click", msg);

botao2.addEventListener("click", (event) => {
  console.log(event);
});
