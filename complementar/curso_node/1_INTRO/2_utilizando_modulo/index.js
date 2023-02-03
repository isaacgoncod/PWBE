const fs = require("fs");

fs.readFile("arquivo.txt", "utf8", (erro, data) => {
  if (erro) {
    console.log(err);
  }

  console.log(data);
});
