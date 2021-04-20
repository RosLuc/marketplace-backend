'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        value: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        value: Sequelize.STRING,
        allowNull: false
      },
      last_name: Sequelize.STRING,
      cpf: {
        value: Sequelize.STRING,
        allowNull: false
      },
      birth_date: {
        value: Sequelize.DATE,
        set: () => {
          if(this.birth_date === null) this.birth_date = new Date();
        }
      },
      email: {
        value: Sequelize.STRING,
        allowNull: false
      },
      password: {
        value: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
