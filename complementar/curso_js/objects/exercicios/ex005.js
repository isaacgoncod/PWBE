class Conta {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoContaPoupanca = saldoContaPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  depositoPoupanca(valor) {
    this.saldoContaPoupanca += valor;
  }
  saquePoupanca(valor) {
    this.saldoContaPoupanca -= valor;
  }
  depositoCorrente(valor) {
    this.saldoContaCorrente += valor;
  }
  saqueCorrente(valor) {
    this.saldoContaCorrente -= valor;
  }

  transferirPoupancaParaConrrente(valor) {
    if (valor <= this.saldoContaPoupanca) {
      this.saldoContaPoupanca -= valor;
      this.saldoContaCorrente += valor;
    } else {
      console.log("Saldo Insuficiente na Conta Poupança");
    }
  }
  transferirConrrentParaPoupanca(valor) {
    if (valor <= this.saldoContaCorrente) {
      this.saldoContaCorrente -= valor;
      this.saldoContaPoupanca += valor;
    } else {
      console.log("Saldo Insuficiente na Conta Corrent");
    }
  }

  jurosAniversario() {
    let juros = (this.saldoContaPoupanca * this.jurosPoupanca) / 100;

    this.saldoContaPoupanca += juros;
  }
}

class ContaEspecial extends Conta {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
    super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca * 2);
  }
}

let minhaConta = new Conta(1000, 2000, 1);
let minhaContaEspecial = new ContaEspecial(10000, 50000, 2);

console.log(minhaConta);

minhaConta.depositoPoupanca(1000);

console.log(minhaConta);

minhaConta.transferirPoupancaParaConrrente(5000);

console.log(minhaConta);

minhaConta.depositoCorrente(1000);

console.log(minhaConta);

minhaConta.saqueCorrente(100);
minhaConta.jurosAniversario();

console.log(minhaConta);

console.log(minhaContaEspecial);

minhaContaEspecial.saqueCorrente(5000);

minhaContaEspecial.jurosAniversario();
console.log(minhaContaEspecial);
