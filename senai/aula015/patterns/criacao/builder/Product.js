class Product {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  listParts() {
    console.log(`Partes do produto: ${this.parts.join(', ')}`);
  }
}

module.exports = Product;
