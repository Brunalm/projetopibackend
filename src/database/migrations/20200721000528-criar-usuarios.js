'use strict';

module.exports = { //criando tabela
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
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
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoria: {
        type: Sequelize.ENUM('admin', 'vendedor', 'comum'), //enum variavel de valores fixos
        allowNull: false,
        defaultValue: 'comum'
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
    return queryInterface.dropTable('usuarios')
  }
};
