const express = require("express");
const cors = require("cors");

const app = express();

const inventarioRoutes = require("./routes/inventarioRoutes");

app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/inventario", inventarioRoutes);

app.listen(3000);
