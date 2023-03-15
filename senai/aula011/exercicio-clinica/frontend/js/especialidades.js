const uri = "http://localhost:3000/";
const corpo = document.querySelector("#corpo");

fetch(uri + "especialidades", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");

    col1.innerHTML = e.nome;

    linha.appendChild(col1);

    corpo.appendChild(linha);
  });
}
