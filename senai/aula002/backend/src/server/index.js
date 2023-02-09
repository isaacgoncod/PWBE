const express = require("express");

const router = require("../routes/routes");

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("respondendo na porta:3000");
});
