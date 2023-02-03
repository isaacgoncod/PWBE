let num = 1;
let num1 = 2;
let num2 = 7;
let num3 = 8;

function imprimirNum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNum(num, num1, num2);

console.log(" ");

imprimirNum(num3, num);

console.log(" ");

imprimirNum(3, 3, 33, 5, 5, 5);
