const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const { DATABASE_URL } = require("./config/security");

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
/*
Métodos HTTP: GET, POST, PUT, DELETE

Tipos de Parâmetros:
- Query Params: request.query (Filtros, ordenacao, paginacao...)
- Route Params: request.params (identificar um recurso na alteracao ou remocao)
- Body: request.body (dados para criacao ou alteracao de um registro)
*/

app.listen(3333);
