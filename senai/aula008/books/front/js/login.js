const inpMatricula = document.querySelector("#matricula");
const inpSenha = document.querySelector("#senha");

const base = [
  {
    nome: "admin",
    matricula: 123456,
    senha: "admin",
    salario: 1000,
    id: 3,
  },
];

function autenticar() {
  let matricula = inpMatricula.value;
  let senha = inpSenha.value;

  let usuario = base.find((user) => {
    return user.matricula == matricula && user.senha == senha;
  });

  if (usuario != undefined) {
    let info = {
      id: usuario.id,
      nome: usuario.nome,
    };

    localStorage.setItem("usuario", JSON.stringify(info));

    window.location.href = "./form.html";
  } else {
    alert("Usuário e senha inválidos");
  }
}
