'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("bank_account", "number_card", {
      type: Sequelize.STRING,
      unique: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("bank_account", "number_card", {
      type: Sequelize.STRING,
      unique: false
    });
  }
};
