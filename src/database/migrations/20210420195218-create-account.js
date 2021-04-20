'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('account', { 
      id: {
        value: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      number_card: {
        value: Sequelize.STRING,
        allowNull: false
      },
      validate_date: {
        value: Sequelize.DATE,
        set: () => {
          if(this.validate_date === null) this.validate_date = new Date();
        }
      },
      verify_nuber: {
        value: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        value: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('account');
  }
};
