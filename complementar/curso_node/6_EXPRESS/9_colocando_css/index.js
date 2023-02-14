const express = require("express");
const app = express();
const port = 3000; //variável ambiente

const path = require("path");

const basePath = path.join(__dirname, "./templates");

const usersRouters = require("./users");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static("public"));

app.use("/users", usersRouters);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
