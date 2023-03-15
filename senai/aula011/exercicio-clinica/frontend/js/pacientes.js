const uri = "http://localhost:3000/";
const corpo = document.querySelector("#corpo");

fetch(uri + "pacientes", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    // let del = document.createElement("button");
    // del.innerHTML = "Excluir";
    // del.setAttribute("onclick", `excluirItem('${e.id}')`);

    // del.className = "btn-delete";

    col1.innerHTML = e.nome;
    col2.innerHTML = formatarData(e.data_nascimento)
    // col3.appendChild(del);

    linha.appendChild(col1);
    linha.appendChild(col2);
    // linha.appendChild(col3);

    corpo.appendChild(linha);
  });
}

// function excluirItem(i) {
//   if (confirm("Você deseja EXCLUIR este paciente?"))
//     fetch(uri + "delete/" + i, { method: "DELETE" })
//       .then((resp) => resp.status)
//       .then((resp) => {
//         if (resp == 204) window.location.reload();
//         else alert("Erro ao enviar dados");
//       });
// }

function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
