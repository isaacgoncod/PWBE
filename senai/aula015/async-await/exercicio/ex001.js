var data = [
  { mes: "Janeiro", aporte: 500, juros: 0.1 },
  { mes: "Fevereiro", aporte: 300, juros: 0.3 },
  { mes: "Março", aporte: 200, juros: 0.5 },
  { mes: "Abril", aporte: 200, juros: 0.6 },
  { mes: "Maio", aporte: 600, juros: 0.5 },
  { mes: "Junho", aporte: 200, juros: 0.7 },
  { mes: "Julho", aporte: 300, juros: 0.5 },
  { mes: "Agosto", aporte: 300, juros: 1 },
  { mes: "Setembro", aporte: 350, juros: 1.2 },
  { mes: "Outubro", aporte: 550, juros: 1.1 },
  { mes: "Novembro", aporte: 700, juros: 1.1 },
  { mes: "Dezembro", aporte: 520, juros: 1.1 },
];

var montante = 0;

function calcRentabilidade(data, montante) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let calc = montante * (data.juros / 100);

      console.log(
        `A rentabilidade do mês de ${
          data.mes
        } (montante: ${formatarMoeda(
          montante
        )}), com o aporte de ${formatarMoeda(
          data.aporte
        )} , foi de ${formatarMoeda(calc)}`
      );

      resolve();
    }, 1000);
  });
}

function formatarMoeda(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

async function calcAsync() {
  for (let i = 0; i < data.length; i++) {
    montante += data[i].aporte;
    
    await calcRentabilidade(data[i], montante);
  }
}

calcAsync();
