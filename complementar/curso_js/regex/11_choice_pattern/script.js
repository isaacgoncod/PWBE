const reg = /\w+: (Isaac|Gustavo|Melissa)/; //nome:

console.log(reg.test("Nome: Isaac"));
console.log(reg.test("Nome: Bruno"));
console.log(reg.test("Nome: Melissa"));
