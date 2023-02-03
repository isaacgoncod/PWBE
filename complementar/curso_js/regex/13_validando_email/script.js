const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("isaacgoncod@gmail.com"));

console.log(validarEmail.test("isaacgoncod@gmail"));

console.log(validarEmail.test("gmail.com"));
