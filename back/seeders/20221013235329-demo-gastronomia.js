'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Gastronomia', [
      {
        name: 'Don pepe',
        ubication: 'Larrañaga 33',
        phoneNumber: '351223322',
        tipoGastronomiaId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Don pepe',
        ubication: 'Larrañaga 33',
        phoneNumber: '351223322',
        tipoGastronomiaId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Don pepe',
        ubication: 'Larrañaga 33',
        phoneNumber: '351223322',
        tipoGastronomiaId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
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