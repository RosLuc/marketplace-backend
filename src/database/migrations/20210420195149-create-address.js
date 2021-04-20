'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('address', { 
      id: {
        value: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      uf: {
        value: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        value: Sequelize.STRING,
        allowNull: false
      },
      address: {
        value: Sequelize.STRING,
        allowNull: false
      },
      comp: {
        value: Sequelize.STRING,
        allowNull: false
      },
      district: {
        value: Sequelize.STRING,
        allowNull: false
      },
      number: {
        value: Sequelize.INTEGER,
        allowNull: false
      },
      city: {
        value: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('address');
  }
};
