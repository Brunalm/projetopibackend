const Pedido = require("../models/Pedido");
const Usuario = require("../models/Usuario");
const Produto = require("../models/Produto");
const { Op } = require("sequelize");

module.exports = {
    // INDEX, SHOW, STORE, UPDATE, DELETE

    async store(req, res) { //listagem = index
        const {
            nome,
            sobrenome,
            email,
            cpf,
            nascimento,
            telefone,
            cep,
            entrega,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            nome_cartao,
            cpf_titular,
            numero_cartao,
            codigo_segurança,      
            validade,
            produtos_ids,

        } = req.body;

        //usuário que finalizou a compra
        const {id: userId} = req.userId;

        const usuario = await Usuario.findByPk(userId);

        if (!usuario) {
            return res.status(400).json('Usuário não encontrado!');
        }

        const produtos = await Produto.findAll({
            //pegar todos os produtos quando o id for igual ao id do array
            where: {
                id: {
                    [Op.in]: produtos_ids
                }
            }
        })

        //criando pedido
        const pedido = await Pedido.create({
            nome,
            sobrenome,
            email,
            cpf,
            nascimento,
            telefone,
            cep,
            entrega,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            nome_cartao,
            cpf_titular,
            numero_cartao,
            codigo_segurança,      
            validade,
            user_id: usuario.id
        })

        await pedido.addProdutos(produtos);

    }
}