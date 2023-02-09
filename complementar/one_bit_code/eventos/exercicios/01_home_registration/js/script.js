function saveHouse() {
  let area = document.querySelector("input[name='area']").value;
  let numero = document.querySelector("input[name='numero']").value;
  let bairro = document.querySelector("input[name='bairro']").value;
  let cidade = document.querySelector("input[name='cidade']").value;

  let newListValue = document.createElement("li");
  newListValue.innerText = `${area} m², número ${numero} (${bairro} - ${cidade})`;

  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover";
  removeButton.setAttribute("onclick", "removeHouse(this)");

  newListValue.appendChild(removeButton);

  document.getElementById("house-list").appendChild(newListValue);
}

function removeHouse(button) {
  let liToRemove = button.parentNode;
  document.getElementById("house-list").removeChild(liToRemove);
}
