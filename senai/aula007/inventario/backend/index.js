const express = require("express");
const cors = require("cors");

const app = express();

const itemRoutes = require("./routes/itemRoutes");

app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", itemRoutes);

app.listen(3000);
