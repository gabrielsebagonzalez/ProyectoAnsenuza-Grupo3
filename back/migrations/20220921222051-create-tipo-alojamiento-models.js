'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tipo_alojamiento.models', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        comment: 'Primary key: Unique user ID.',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tipo_alojamiento.models');
  }
};