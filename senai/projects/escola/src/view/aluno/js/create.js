const dados = document.querySelector("#dados");

const options = { method: "GET" };

fetch("http://localhost:3000/alunos", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
