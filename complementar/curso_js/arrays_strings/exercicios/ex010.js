class Calculadora {
  somar(numA, numB) {
    return numA + numB;
  }
  subtrair(numA, numB) {
    return numA - numB;
  }
  multiplicar(numA, numB) {
    return numA * numB;
  }
  dividir(numA, numB) {
    return numA / numB;
  }
}

const calc = new Calculadora();

console.log(calc.somar(5, 5));
console.log(calc.subtrair(5, 5));
console.log(calc.multiplicar(5, 5));
console.log(calc.dividir(5, 5));
