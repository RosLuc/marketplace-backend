'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bank_Account',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company_id:{
        type: Sequelize.INTEGER,
        references: { model: 'company', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      bank:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_account:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_legal_person:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      conpj_cpf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      name:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      agency:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      agency_digit:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      number_account:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      account_digit:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bank_Account');
  }
};
