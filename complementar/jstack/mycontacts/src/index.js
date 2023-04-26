const express = require('express');
require('express-async-errors');

const contactRoutes = require('./routes/contactRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

app.use(express.json());

app.use(contactRoutes);
app.use(categoryRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});
const port = 3000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
