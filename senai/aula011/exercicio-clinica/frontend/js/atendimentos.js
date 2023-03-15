const uri = "http://localhost:3000/";
const corpo = document.querySelector("#corpo");

fetch(uri + "atendimentos", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    col1.innerHTML = formatarData(e.data);
    col2.innerHTML = e.medico_id;
    col3.innerHTML = e.paciente_id;

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3)

    corpo.appendChild(linha);
  });
}

function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
