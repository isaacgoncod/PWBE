const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("127.0.0.1"));
console.log(validarIp.test("8.8.8.8"));

console.log(validarIp.test("12557.0.0.1"));
console.log(validarIp.test("127.0.0.1.5"));
console.log(validarIp.test("327.0.0.1"));
console.log(validarIp.test("127.1"));
