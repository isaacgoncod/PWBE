const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));

console.log(validarMarca.test("Marca: nike"));

console.log(validarMarca.test("Marca: VW"));
