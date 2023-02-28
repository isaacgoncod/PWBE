const uri = "http://localhost:3000/book";
const form = document.querySelector(".form");
const corpo = document.querySelector("#corpo");

fetch(uri + "/read", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const body = {
    id: form.id.value,
    title: form.title.value,
    author: form.author.value,
    price: form.price.value,
    date_emprest: form.date_emprest.value,
    date_prev_dev: form.date_prev_dev.value,
    date_devolution: form.date_devolution.value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  options.body = JSON.stringify(body);

  fetch(uri + "/create", options)
    .then((resp) => resp.status)
    .then((resp) => {
      if (resp == 201) window.location.reload();
      else alert("Erro ao enviar dados");
    });
});

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
    col2.innerHTML = e.title;
    col3.innerHTML = e.author;
    col4.innerHTML = e.price;
    col5.innerHTML = new Date(e.date_emprest).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    col6.innerHTML = new Date(e.date_prev_dev).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    if (e.date_devolution != undefined) {
      col7.innerHTML = new Date(e.date_devolution).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    }

    col8.innerHTML = e.tax_day;

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
