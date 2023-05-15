//Exemplo da execução sincronizada JavaScript padrão
//Função normal com uma simulação de tempo com setTimeout
function voltarDoBanheiro(aluno) {
  setTimeout(
    () => console.log(`${aluno.nome} voltou do banheiro`),
    aluno.tempo
  );
}
//Lista de objetos(Alunos que precisam ir ao banheiro)
var alunos = [
  { nome: "Camacho", tempo: 3000 },
  { nome: "Larissa", tempo: 2000 },
  { nome: "Karen", tempo: 1000 },
];
//Função que simula os pedidos sincronos (todos ao mesmo tempo)
function pedidos() {
  alunos.forEach((aluno) => {
    console.log(`${aluno.nome} pede para ir ao banheiro`);
    voltarDoBanheiro(aluno);
  });
}
pedidos();

//Exemplo com assincronicidade - Fila para o banheiro
//Função que retorna uma promessa de que o aluno vai voltar
function voltarDoBanheiro(aluno) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(`${aluno.nome} voltou do banheiro`);
      res();
    }, aluno.tempo);
  });
}
//Lista de objetos(Alunos que precisam ir ao banheiro)
var alunos = [
  { nome: "Camacho", tempo: 3000 },
  { nome: "Larissa", tempo: 2000 },
  { nome: "Karen", tempo: 1000 },
];
//Função que simula os pedidos assincronos (um de cada vez em fila)
async function pedidos() {
  for (let i = 0; i < alunos.length; i++) {
    console.log(`${alunos[i].nome} pede para ir ao banheiro`);
    await voltarDoBanheiro(alunos[i]);
  }
}
pedidos();
