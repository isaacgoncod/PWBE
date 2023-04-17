class Paciente {
  constructor(i) {
    this.id = i.id;
    this.nome_completo = i.nome_completo;
    this.nascimento = i.nascimento;
    this.peso = i.peso;
    this.altura = i.altura;
    this.idade = this.calcIdade();
    this.imc = this.calcImc();
    this.diagnostico = this.diagnostico();
  }

  create() {
    return `INSERT INTO paciente VALUE(DEFAULT, "${this.nome_completo}", "${this.nascimento}",  ${this.peso},  ${this.altura},  ${this.idade},  ${this.imc},  "${this.diagnostico}")`;
  }

  read() {
    return `SELECT * FROM paciente`;
  }

  update() {
    return `UPDATE paciente SET nome_completo = "${this.nome_completo}", nascimento = "${this.nascimento}", peso = ${this.peso}, altura = ${this.altura}, idade = ${this.idade}, imc = ${this.imc}, diagnostico = "${this.diagnostico}" WHERE id = ${this.id}`;
  }

  del() {
    return `DELETE FROM paciente WHERE id = ${this.id}`;
  }

  calcIdade() {
    const today = new Date();
    const nascimento = new Date(this.nascimento);

    let idade = today.getFullYear() - nascimento.getFullYear();
    const monthDiff = today.getMonth() - nascimento.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff == 0 && today.getDate() < nascimento.getDate())
    ) {
      idade--;
    }

    return idade;
  }

  calcImc() {
    let imc = this.peso / (this.altura * this.altura);
    return imc.toFixed(2);
  }

  diagnostico() {
    let mensagem = "";

    if (this.imc < 18.5) {
      mensagem = "Abaixo do peso";
    } else if (this.imc >= 18.5 && this.imc < 25) {
      mensagem = "Peso normal";
    } else if (this.imc >= 25 && this.imc < 30) {
      mensagem = "Sobrepeso";
    } else if (this.imc >= 30 && this.imc < 35) {
      mensagem = "Obesidade grau 1";
    } else if (this.imc >= 35 && this.imc < 40) {
      mensagem = "Obesidade grau 2";
    } else {
      mensagem = "Obesidade grau 3";
    }

    return mensagem;
  }
}

module.exports = Paciente;
