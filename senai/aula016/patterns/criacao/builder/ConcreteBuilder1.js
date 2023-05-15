const Builder = require('./Builder');
const Product = require('./Product');

class ConcreteBuilder1 extends Builder {
  constructor() {
    super();
    this.product = new Product();
  }

  buildPart1() {
    this.product.addPart('Parte 1 do produto construída pelo Construtor 1');
  }

  buildPart2() {
    this.product.addPart('Parte 2 do produto construída pelo Construtor 1');
  }

  buildPart3() {
    this.product.addPart('Parte 3 do produto construída pelo Construtor 1');
  }

  getProduct() {
    return this.product;
  }
}

module.exports = ConcreteBuilder1;
