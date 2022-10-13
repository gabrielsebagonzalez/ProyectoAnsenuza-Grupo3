'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('TipoGastronomia', [
      {
        name: 'Cafeteria',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Heladeria',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Restaurante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};