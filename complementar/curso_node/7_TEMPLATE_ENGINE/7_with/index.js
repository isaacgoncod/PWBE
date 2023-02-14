const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js...",
    comments: 4,
  };

  res.render("blogpost", { post });
});
app.get("/", (req, res) => {
  const user = {
    name: "Isaac",
    surname: "Gonçalves",
    age: 21,
  };

  const auth = true;

  const approved = false;

  res.render("home", { user: user, auth, approved });
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
