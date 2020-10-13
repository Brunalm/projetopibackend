'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { //alterando coluna preço na tabela
    return queryInterface.changeColumn("produtos", "preco", {
      type: Sequelize.DOUBLE,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("produtos", "preco", {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  }
};
