module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Alojamientos', 'email', {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        }, { transaction: t }),
        queryInterface.addColumn('Alojamientos', 'web', {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        }, { transaction: t }),
        queryInterface.addColumn('Alojamientos', 'imageURL', {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        }, { transaction: t })
      ]);
    });
  },
   down: (queryInterface, Sequelize) => {
     return queryInterface.sequelize.transaction(t => {
       return Promise.all([
         queryInterface.removeColumn('Alojamientos', 'email', { transaction: t }),
         queryInterface.removeColumn('Alojamientos', 'web', { transaction: t }),
         queryInterface.removeColumn('Alojamientos', 'imageURL', { transaction: t })
       ]);
     });
   }
};