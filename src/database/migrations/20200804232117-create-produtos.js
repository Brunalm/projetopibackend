'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: { //chave primaria
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      }, 
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cor:{
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.INTEGER,
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

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produtos')
  }
};
