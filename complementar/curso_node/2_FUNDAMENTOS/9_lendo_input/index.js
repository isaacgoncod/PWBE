const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual a sua linguagem preferida ? ", (language) => {
  if (language === "Java" || language === "java") {
    console.log("Isso sim é linguagem");
  } else {
    console.log(`${language} Isso nem é linguagem!!`);
  }
  readline.close();
});
