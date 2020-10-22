const express = require("express"); //importar biblioteca express
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

require("./database");

const app = express(); //criar variavel app que recebe express

app.use(cors());
app.use(express.json()); //prepara a aplicação para retornar um json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333); //executando função que define porta da aplicação 

