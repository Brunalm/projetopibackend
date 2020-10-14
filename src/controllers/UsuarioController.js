const Usuario = require('../models/Usuario');

module.exports = {
  async store(req, res) {
    const { nome, sobrenome, email, senha } = req.body;

    const usuarioExistente = await Usuario.findOne({ where: { email } });

    if (usuarioExistente) {
      return res.status(400).json('Usuário existente');
    }

    const novoUsuario = await Usuario.create({
      nome,
      sobrenome,
      email,
      senha,
    });

    return res.json(novoUsuario);
  }
}