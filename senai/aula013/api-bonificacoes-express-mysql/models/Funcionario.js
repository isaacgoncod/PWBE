class Funcionario {
  constructor(i) {
    this.matricula = i.matricula;
    this.nome_completo = i.nome_completo;
    this.data_admissao = i.data_admissao;
    this.salario = i.salario;
    this.data_pagto = i.data_pagto;
    this.desempenho = i.desempenho;
    this.bonificacao = this.calcBonificacao();
  }

  create() {
    return `INSERT INTO funcionario VALUE(DEFAULT, "${this.nome_completo}", "${this.data_admissao}",  ${this.salario},  "${this.data_pagto}",  ${this.desempenho}, ${this.bonificacao})`;
  }

  read() {
    return `SELECT * FROM funcionario`;
  }

  update() {
    return `UPDATE funcionario SET nome_completo = "${this.nome_completo}", data_admissao = "${this.data_admissao}", salario = ${this.salario}, data_pagto = "${this.data_pagto}", desempenho = ${this.desempenho}, bonificacao = ${this.bonificacao} WHERE matricula = ${this.matricula}`;
  }

  del() {
    return `DELETE FROM funcionario WHERE matricula = ${this.matricula}`;
  }

  anosTrabalhados() {
    let date1 = new Date(this.data_admissao);
    let date2 = new Date();

    let diferencaEmMilissegundos = Math.abs(date2.getTime() - date1.getTime());

    let diferencaEmAnos = Math.floor(
      diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000)
    );

    return diferencaEmAnos;
  }

  calcBonificacao() {
    return this.salario * 0.02 * this.anosTrabalhados() * this.desempenho;
  }
}

module.exports = Funcionario;
