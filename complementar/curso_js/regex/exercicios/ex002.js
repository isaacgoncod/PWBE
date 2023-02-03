const validarId = /\d+ID\b/;

console.log(validarId.test("5555ID"));

console.log(validarId.test("5555"));

console.log(validarId.test("teste ID"));

console.log(validarId.test("ID"))
