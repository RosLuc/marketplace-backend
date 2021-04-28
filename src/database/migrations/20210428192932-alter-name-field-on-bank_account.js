'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('bank_account', 'verify_nuber', 'verify_number');
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('bank_account', 'verify_number', 'verify_nuber');
  }
};
