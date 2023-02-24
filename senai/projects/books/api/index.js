const express = require("express");
const cors = require("cors");

const app = express();

const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/book", bookRoutes);

app.listen(3000);
