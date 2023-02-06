let promessa = Promise.resolve(4 + 8);

console.log("Algum código");

promessa.then((value) => {
  console.log(`O valor é ${value}`);
});
