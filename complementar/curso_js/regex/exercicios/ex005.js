const validarNomeUsuario = /^(?=.{3,16}$)[a-z 0-9 A-Z -_]/;

console.log(validarNomeUsuario.test("isaac_cod"));

console.log(validarNomeUsuario.test("ISapp"));
console.log(validarNomeUsuario.test("isaac_cod"));
console.log(validarNomeUsuario.test("111111111111111111"));
