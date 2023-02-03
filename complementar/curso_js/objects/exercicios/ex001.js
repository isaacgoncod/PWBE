class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  get getSaldo() {
    return this.saldo;
  }
  deposito(quantia) {
    this.saldo += quantia;
  }

  saque(quantia) {
    this.saldo -= quantia;
  }
}

let minhaConta = new Conta(500);

minhaConta.deposito(500);

console.log(minhaConta.getSaldo);
