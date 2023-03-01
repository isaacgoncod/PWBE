const uri = "http://localhost:3000/book";
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const body = {
    title: form.title.value,
    author: form.author.value,
    price: form.price.value,
    date_emprest: form.date_emprest.value,
    date_prev_dev: form.date_prev_dev.value,
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
