const express = require("express");

const app = express();

const inventarioRoutes = require("./routes/inventarioRoutes");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", inventarioRoutes);

app.listen(3000);
