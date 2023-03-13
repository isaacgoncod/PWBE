const express = require("express");
const cors = require("cors");

const calculadoraRoutes = require("./routes/calculadora.routes");
const nomeRoutes = require("./routes/nome.routes");
const randomRoutes = require("./routes/random.routes");
const nomeRandomRoutes = require("./routes/nomeRandom.routes");
const tarefaRoutes = require("./routes/tarefa.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use(calculadoraRoutes);
app.use(nomeRoutes);
app.use(randomRoutes);
app.use(nomeRandomRoutes);
app.use(tarefaRoutes);

app.listen(3000);
