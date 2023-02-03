const recursao = (n) => {
  if (n - 1 < 2) {
    console.log("Recursou parou");
  } else if (n % 2 != 0) {
    console.log("Numero Impar " + n);
    recursao(n - 1);
  } else {
    console.log("Numero par " + n);
    recursao(n - 2);
  }
};

recursao(30);
recursao(10);
recursao(55);
