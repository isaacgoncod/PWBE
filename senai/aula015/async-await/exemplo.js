function tempo(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function facaAlgo() {
  console.log("inicio");

  await tempo(1000);

  console.log("fim");
}

facaAlgo();
