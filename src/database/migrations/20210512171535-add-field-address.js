'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'address', 
      'company_id', 
      {
        type: Sequelize.INTEGER,
        references: { model: 'company', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('address', 'company_id');
  }
};
