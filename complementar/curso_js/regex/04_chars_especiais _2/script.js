const dia = /\d\d/;

console.log(dia.test("2023") && "2023".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("asddfsdfsd"));
console.log(palavraTresLetras.test("as"));
