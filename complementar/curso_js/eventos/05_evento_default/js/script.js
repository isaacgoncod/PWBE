let a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Trocando a função do link");
});
