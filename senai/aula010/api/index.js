const express = require("express");
const cors = require("cors");

const calculadoraRoutes = require("./routes/calculadora.routes");
const nomeRoutes = require("./routes/nome.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/calculadora", calculadoraRoutes);
app.use("/nome", nomeRoutes);

app.listen(3000);
