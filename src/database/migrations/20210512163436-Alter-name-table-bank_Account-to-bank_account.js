'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.renameTable('bank_Account', 'bank_account');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('bank_account', 'bank_Account');
  }
};
