const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const alunoRoutes = require("./routes/alunoRoutes");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("./public"));

app.use("/alunos", alunoRoutes);

app.listen(3000);
