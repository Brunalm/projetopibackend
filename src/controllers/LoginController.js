const Usuario = require("../models/Usuario");

module.exports = {
    // INDEX, SHOW, STORE, UPDATE, DELETE

    async store(req, res) { //listagem = index
        const email = req.body.email; //acessando a variavel email enviada pelo insomnia 
        const senha = req.body.senha; //acessando a variavel senha enviada pelo insomnia 

        const user = { //atribuindo ao objeto user 
            email,
            senha
        };

        let usuarioLogin = await Usuario.findOne({ where: { email } });

        if (!usuarioLogin) {
            return res.status(400).json('Usuário não encontrado!');
        }

        if (senha !== usuarioLogin.senha) {
            return res.status(400).json('Senha incorreta!');
        }

        delete usuarioLogin.dataValues.senha;

        // const users = await Usuario.findAll(); //metodo padrão - seleciona tudo da tabela usuario

        return res.json({
            usuario: usuarioLogin,
            token: usuarioLogin.generateToken(),
        }); //retorna json
    }
}