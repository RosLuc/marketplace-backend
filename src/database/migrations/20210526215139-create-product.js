'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
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
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_amount:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      price:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      image:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      detail:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};
