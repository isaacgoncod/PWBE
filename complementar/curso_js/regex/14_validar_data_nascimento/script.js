const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataNasc.test("05/01/2002"));

console.log(validarDataNasc.test("05/01/20"));
console.log(validarDataNasc.test("05/012002"));
console.log(validarDataNasc.test("0501/202"));
