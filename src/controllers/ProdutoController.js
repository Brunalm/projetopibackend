const Produto = require("../models/Produto");
const Foto = require("../models/Foto");

module.exports = {

    async index(req, res) {
        const products = await Produto.findAll({
            include:[{
                model: Foto,
                as: 'fotos'
            }]
        });

        return res.json(products);
    }, 
    async show(req, res) {
        const {
            id
        } = req.params;
        const produto = await Produto.findByPk(id, {
            include:[{
                model: Foto,
                as: 'fotos'
            }]
        });

        return res.json(produto);
    },

    async store(req, res) {
        console.log(req.body);
        const {
            nome,
            descricao,
            cor,
            tamanho,
            preco 
        } = req.body; //acessando váriavel .nome variavel que foi passada no insomnia 

        const fotos = req.files;

        const fotosArr = [];

        const produto = await Produto.create({ //atribuindo retorno para variavel produto
            nome,
            descricao,
            cor,
            tamanho,
            preco,
        });

        //loop que percorre array de objetos
        for (const foto of fotos) {
        const photo = await produto.createFoto({
                nome: foto.filename,
                diretorio: foto.path
            });

            //adiciona item ao array
            fotosArr.push(photo);
        }

        //retorna objeto com valores de produto e foto
        return res.json({
            produto: produto,
            fotos: fotosArr
        });
    }
}