class ClienteEndereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set setRua(rua) {
    this.rua = rua;
  }
  get getRua() {
    return this.rua;
  }
  set setBairro(bairro) {
    this.bairro = bairro;
  }
  get getBairro() {
    return this.bairro;
  }
  set setCidade(cidade) {
    this.cidade = cidade;
  }
  get getCidade() {
    return this.cidade;
  }
  set setEstado(estado) {
    this.estado = estado;
  }
  get getEstado() {
    return this.estado;
  }
}

let meuEndereco = new ClienteEndereco(
  "Tassinari",
  "12 De Setembro",
  "Jaguariúna",
  "São Paulo"
);

console.log(meuEndereco);

meuEndereco.setRua = "Bernardino";

console.log(meuEndereco);

console.log(meuEndereco.getBairro);
