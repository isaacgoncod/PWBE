const express = require("express");
const cors = require("cors");

const corretorRoutes = require("./routes/corretor.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/corretor", corretorRoutes)

app.listen(3000);
