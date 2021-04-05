'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('produtos', 'descricao', {
      type: Sequelize.STRING(5000),
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('produtos', 'descricao', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};
