const notAB = /[^ab]/;

console.log(notAB.test("a"));
console.log(notAB.test("aqui tem a"));

const notAZ = /[^a-z]/;

console.log(notAZ.test("123 as"));
console.log(notAZ.test("asdfsdfsd6fsdfsdfs"));

const aZ = /[a-z]/;

console.log(aZ.test("123 a"));

