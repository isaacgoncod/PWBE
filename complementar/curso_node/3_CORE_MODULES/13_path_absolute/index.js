const path = require("path");

//path absoluto
console.log(path.resolve("teste.txt"));

//fomar path
const midFolder = "relatorios";
const fileName = "isaac.txt";

const finalPath = path.join("/", "arquivos", midFolder, fileName);

console.log(finalPath);
