'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.renameTable('bank_account', 'credit_card');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('credit_card', 'bank_account');
  }
};
