//inicializa o banco e os models
const Sequelize = require('sequelize'); //importa sequelize
const dbConfig = require('../config/database'); //objeto de configuração 

const Usuario = require('../models/Usuario'); //importa model usuario
const Produto = require('../models/Produto'); //toda vez importar
const Foto = require('../models/Foto');
const Pedido = require('../models/Pedido');

const connection = new Sequelize(dbConfig);

Usuario.init(connection); 
Produto.init(connection);
Foto.init(connection);
Pedido.init(connection);

Usuario.associate(connection.models);
Produto.associate(connection.models);
Foto.associate(connection.models);
Pedido.associate(connection.models);

module.exports = connection; 

//criando conexão com bd e passando conexão para os models