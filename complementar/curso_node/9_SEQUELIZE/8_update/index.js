const express = require("express");
const exphbs = require("express-handlebars");
const { ExclusionConstraintError } = require("sequelize");
const conn = require("./db/conn");

const User = require("./models/User");

const app = express();

app.use(express.static("public"));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.post("/users/create", async (req, res) => {
  let { name, occupation, newsletter } = req.body;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  console.log(req.body);

  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userview", { user });
});

app.get("/", async function (req, res) {
  const users = await User.findAll({ raw: true });

  console.log(users);

  res.render("home", { users: users });

  res.render("home");
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("useredit", { user });
});

app.post("/users/update", async (req, res) => {
  let { id, name, occupation, newsletter } = req.body;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }
  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };

  await User.update(userData, { where: { id: id } });

  res.redirect("/");
});

app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.redirect("/");
});

conn
  .sync()
  // .sync({ force: true }) //recria as tabelas do banco
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
