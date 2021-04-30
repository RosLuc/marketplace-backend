'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("users", "cpf", {
      type: Sequelize.STRING,
      unique: true
    });
    await queryInterface.changeColumn("users", "email", {
      type: Sequelize.STRING,
      unique: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("users", "cpf", {
      type: Sequelize.STRING,
      unique: false
    });
    await queryInterface.changeColumn("users", "email", {
      type: Sequelize.STRING,
      unique: false
    });
  }
};
