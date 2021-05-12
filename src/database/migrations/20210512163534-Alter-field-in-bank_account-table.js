'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('bank_account', 'conpj_cpf', 'cnpj_cpf');
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('bank_account', 'cnpj_cpf', 'conpj_cpf');
  }
};
