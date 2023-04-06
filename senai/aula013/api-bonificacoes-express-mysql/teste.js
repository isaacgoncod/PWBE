var data = new Date();
var dataFormatada = data.toISOString().substring(0, 10);
console.log("Data formatada: " + dataFormatada);

let dataAdmissao = "2020-10-20";

let diffDate = new Date(dataFormatada) - new Date(dataAdmissao);

let resp = new Date(diffDate).getFullYear();

function calcularDiferencaEmAnosMeses(data1, data2) {
  let date1 = new Date(data1);
  let date2 = new Date(data2);

  let diferencaEmMilissegundos = Math.abs(date2.getTime() - date1.getTime());

  let diferencaEmAnos = Math.floor(
    diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000)
  );

  return diferencaEmAnos;
}

console.log(calcularDiferencaEmAnosMeses(dataAdmissao, dataFormatada));
