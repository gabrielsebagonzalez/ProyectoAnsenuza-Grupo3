'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('TipoAlojamientos', [
      {
        name: 'Hotel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Apartamento',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Casa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cabana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hostal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Camping',
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
