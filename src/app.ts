const express = require('express');
const Router = require('./routes/to-do-list-routes')
require('dotenv/config');

const app = express();

app.use(express.json());

app.use(Router);

app.listen(process.env.PORT, () => {
  console.log(`Ouvindo na porta ${process.env.PORT}!`);
});
