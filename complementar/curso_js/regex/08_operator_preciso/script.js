const cep = /\d{5}-\d{3}/;

console.log(cep.test("8888-8888"));

console.log(cep.test("13912-574"));

console.log(cep.test("asd"));

console.log(cep.test("8888-98"));




