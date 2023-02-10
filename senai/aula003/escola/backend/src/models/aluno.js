class Aluno {
  constructor(ra, nome, nascimento) {
    this.ra = ra;
    this.nome = nome;
    this.nascimento = nascimento;
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
}

module.exports = {
  Aluno,
};
