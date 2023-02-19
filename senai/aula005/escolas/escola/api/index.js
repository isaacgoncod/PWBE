const express = require("express");
const cors = require("cors");

const alunoRoutes = require("./routes/alunoRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/aluno", alunoRoutes);

app.listen(3000);
