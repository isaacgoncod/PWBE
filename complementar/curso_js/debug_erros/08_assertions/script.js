let array = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let array3 = [];

function iterarArray(array) {
  if (array.length == 0) {
    throw new Error("O array precisa ter pelo menos um elemento");
  } else {
    array.forEach((i) => {
      console.log(i);
    });
  }
}

iterarArray(array);

function arrayVazio(array) {
  if (array.length > 0) {
    throw new Error("O array não pode ter elementos");
  } else {
    console.log("Agora deu certo");
  }
}

iterarArray(array3);
