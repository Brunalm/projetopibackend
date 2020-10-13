const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const LoginController = require("./controllers/LoginController");
const ProdutoController = require("./controllers/ProdutoController");

const routes = Router();

const upload = multer(uploadConfig);

routes.get('/', (req, res) => { // '/' rota que será executada 
    return res.send('olá, bruna'); //send=envia para o navegador 
}); //definir parametros para get (string e função que será executada) - requisição, resposta

routes.get('/home', (req, res) => {
    return res.send('home');
}); 

routes.post('/login', LoginController.store); //store metodo
routes.get('/produtos', ProdutoController.index); //get para listagem - index metodo
routes.post('/produtos', upload.array('photos'), ProdutoController.store);

module.exports = routes;