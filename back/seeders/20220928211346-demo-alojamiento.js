'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Alojamientos', [{
      name: 'Casa Blanca',
      description: 'Hermoso, cerca del lago',
      ubication: 'Larrañaga 37',
      phoneNumber: '351233223',
      tipoAlojamientoId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { 
      name: 'Cuesta Grande',
      description: 'Hermoso, cerca del lago',
      ubication: 'Larrañaga 38',
      phoneNumber: '351989898',
      tipoAlojamientoId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Doña Pocha',
      description: 'Hermosa, Buena vista',
      ubication: 'Salta 45',
      phoneNumber: '351234454',
      tipoAlojamientoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Don Carlos',
      description: 'Hermosa, linda ubicación',
      ubication: 'Laplace 202',
      phoneNumber: '354234321',
      tipoAlojamientoId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Isla Bonita',
      description: 'Hermosa, linda ubicación',
      ubication: 'Cuenca 312',
      phoneNumber: '351768987',
      tipoAlojamientoId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Bella Vista',
      description: 'Hermosa, linda ubicación',
      ubication: 'Cuenca 370',
      phoneNumber: '351329807',
      tipoAlojamientoId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
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
