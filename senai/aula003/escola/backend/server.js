const express = require("express");

const router = require("./src/routes/routes");

const app = express();

const port = 3000;

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Servidor respondendo na porta ${port}`);
});
