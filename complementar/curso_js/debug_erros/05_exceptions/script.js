function saudacao(nome) {
  if (typeof nome != "string") {
    throw new Error("o parâmetro nome precisa ser uma String");
  } else {
    console.log(`Olá ${nome}.`);
  }
}

saudacao("Isaac");
saudacao(45);
