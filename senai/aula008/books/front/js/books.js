const uri = "http://localhost:3000/book";
const corpo = document.querySelector("#corpo");

fetch(uri + "/read", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    let col5 = document.createElement("td");
    let col6 = document.createElement("td");
    let col7 = document.createElement("td");
    let col8 = document.createElement("td");
    let col9 = document.createElement("td");

    let del = document.createElement("button");
    del.innerHTML = "[-]";
    del.setAttribute("onclick", `excluirItem('${e.id}')`);

    col1.innerHTML = e.id;
    col2.innerHTML = `<a href='./editBook.html'>${e.title}</a>`;
    col3.innerHTML = e.author;
    col4.innerHTML = formatarMoeda(e.price);
    col5.innerHTML = formatarData(e.date_emprest);
    col6.innerHTML = formatarData(e.date_prev_dev);

    if (e.date_devolution != undefined) {
      col7.innerHTML = formatarData(e.date_devolution);
    }

    col8.innerHTML = formatarMoeda(e.tax_day);

    col9.appendChild(del);

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    linha.appendChild(col4);
    linha.appendChild(col5);
    linha.appendChild(col6);
    linha.appendChild(col7);
    linha.appendChild(col8);

    linha.appendChild(col9);

    corpo.appendChild(linha);
  });
}

function excluirItem(i) {
  if (confirm("Valida Exclusao"))
    fetch(uri + "/delete/" + i, { method: "DELETE" })
      .then((resp) => resp.status)
      .then((resp) => {
        if (resp == 204) window.location.reload();
        else alert("Erro ao enviar dados");
      });
}

function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
