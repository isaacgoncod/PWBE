const Director = require('./Director');
const ConcreteBuilder1 = require('./ConcreteBuilder1');
const ConcreteBuilder2 = require('./ConcreteBuilder2');

const director = new Director();
const builder1 = new ConcreteBuilder1();
const builder2 = new ConcreteBuilder2();

director.setBuilder(builder1);
director.buildFullProduct();
const product1 = builder1.getProduct();
product1.listParts();

director.setBuilder(builder2);
director.buildMinimalProduct();
const product2 = builder2.getProduct();
product2.listParts();
