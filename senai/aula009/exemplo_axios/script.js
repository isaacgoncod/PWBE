axios
  .get("http://localhost:3000/imovel/listar")
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  });

api.get("/imovel/listar").then(function (resp) {
  console.log(resp.data);
});

let imovel = {
  
}
