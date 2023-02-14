const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
app.get("/", (req, res) => {
  const user = {
    name: "Isaac",
    surname: "Gonçalves",
    age: 21,
  };

  const auth = false;

  const approved = true;

  res.render("home", { user: user, auth, approved });
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
