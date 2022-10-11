'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Alojamientos', [{
      name: 'Hotel España',
      description: 'Hermoso, cerca del lago',
      ubication: 'España 1466',
      phoneNumber: '03562 402714',
      tipoAlojamientoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'hotelespa-a@hotmail.com',
      web: 'espanahotel.blogspot.com/'
    },
    { 
      name: 'Hotel Sarmiento',
      description: 'Hermoso, cerca del lago',
      ubication: 'Sarmiento 131',
      phoneNumber: '03562 40-5201',
      tipoAlojamientoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'hotel-sarmiento@hotmail.com',
      web: 'facebook.com/HotelSarmiento'
    },
    {
      name: 'Hotel Constantino',
      description: 'Hermosa, Buena vista',
      ubication: 'Boulevard 9 de Julio 833',
      phoneNumber: '-',
      tipoAlojamientoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'liz.esper@hotmail.com',
      web: 'hotelconstantino.negocio.site'
    },
    {
      name: 'Hostal del Sol',
      description: 'Hermosa, linda ubicación',
      ubication: 'Bv. Hipolito Irigoyen 1203',
      phoneNumber: '03562 42-2440',
      tipoAlojamientoId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'info@hostalmorteros.com.ar',
      web: 'hostalmorteros.com.ar'
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
