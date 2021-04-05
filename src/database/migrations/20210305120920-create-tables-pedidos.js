'use strict';

module.exports = { //criando tabela
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', {
      id: { //chave primaria
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      }, 

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },

      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },

      nascimento: {
        type: Sequelize.STRING,
        allowNull: false
      },

      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },

      entrega: {
        type: Sequelize.STRING,
        allowNull: false
      },

      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },

      numero: {
        type: Sequelize.STRING,
        allowNull: false
      },

      complemento: {
        type: Sequelize.STRING,
        allowNull: false
      },

      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },

      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },

      nome_cartao: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cpf_titular: {
        type: Sequelize.STRING,
        allowNull: false
      },

      numero_cartao: {
        type: Sequelize.STRING,
        allowNull: false
      },

      codigo_segurança: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      validade: {
        type: Sequelize.STRING,
        allowNull: false
      },

      created_at: { //padrao - timestamps (criação)
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      updated_at: { //padrao (atualização)
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => { //caso der pau
    return queryInterface.dropTable('pedidos')
  }
};
