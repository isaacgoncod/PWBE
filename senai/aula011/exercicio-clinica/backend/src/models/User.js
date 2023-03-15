class User {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.email = i.email;
    this.senha = i.senha;
  }

  add() {
    return `INSERT INTO user VALUE (DEFAULT, '${this.nome}', '${this.email}', '${this.senha}')`;
  }
  read() {
    return `SELECT * FROM user`;
  }

  auth() {
    return `SELECT * FROM user WHERE email = '${this.email}' AND senha = '${this.senha}'`;
  }

  delete() {
    return `DELETE FROM user WHERE id = ${this.id}`
  }
}
module.exports = User;
