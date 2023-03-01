const uri = "http://localhost:3000/book";
const form = document.querySelector(".form");

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
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };

  options.body = JSON.stringify(body);

  fetch(uri + "/update", options)
    .then((resp) => resp.status)
    .then((resp) => {
      if (resp == 204) window.location.reload();
      else alert("Erro ao atualizar dados");
    });
});
