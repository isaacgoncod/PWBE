const form = document.querySelector(".form");
const corpo = document.querySelector("#corpo");
const total = document.querySelector("#total");
var valTotal = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let linha = document.createElement("tr");
  let col1 = document.createElement("td");
  let col2 = document.createElement("td");
  let col3 = document.createElement("td");
  let col4 = document.createElement("td");
  let col5 = document.createElement("td");

  let del = document.createElement("button");
  del.innerHTML = "[-]";
  del.setAttribute("onclick", "excluirItem(this)");
  col1.innerHTML = form.id.value;
  col2.innerHTML = form.nome.value;
  col3.innerHTML = form.descricao.value;
  col4.innerHTML = form.valor.value;
  col5.appendChild(del);

  linha.appendChild(col1);
  linha.appendChild(col2);
  linha.appendChild(col3);
  linha.appendChild(col4);
  linha.appendChild(col5);

  corpo.appendChild(linha);
  valTotal += parseFloat(form.valor.value);
  total.value = valTotal;
});

function excluirItem(i) {
  i.parentNode.parentNode.remove();
}
