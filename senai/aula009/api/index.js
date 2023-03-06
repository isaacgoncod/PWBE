const express = require("express");
const cors = require("cors");

const corretorRoutes = require("./routes/corretor.routes");
const imovelRoutes = require("./routes/imovel.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/corretor", corretorRoutes);
app.use("/imovel", imovelRoutes);

app.listen(3000);
