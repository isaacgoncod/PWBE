class Director {
  constructor() {
    this.builder = null;
  }

  setBuilder(builder) {
    this.builder = builder;
  }

  buildMinimalProduct() {
    this.builder.buildPart1();
  }

  buildFullProduct() {
    this.builder.buildPart1();
    this.builder.buildPart2();
    this.builder.buildPart3();
  }
}

module.exports = Director;
