const express = require("express");
const exphbs = require("express-handlebars");

const port = 3000;
const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

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

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "JavaScript",
      body: "Este artigo vai te ajudar a aprender Node.js...",
      comments: 4,
    },
    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Este artigo vai te ajudar a aprender PHP...",
      comments: 3,
    },
    {
      title: "Aprender Python",
      category: "Python",
      body: "Este artigo vai te ajudar a aprender Python...",
      comments: 2,
    },
  ];

  res.render("blog", { posts });
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
