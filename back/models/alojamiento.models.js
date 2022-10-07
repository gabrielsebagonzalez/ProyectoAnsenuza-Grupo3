'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alojamiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alojamiento.belongsTo(models.TipoAlojamiento,
        {
          foreignKey: 'tipoAlojamientoId',
        });
    }
  };
  Alojamiento.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ubication: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    tipoAlojamientoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: DataTypes.STRING,
    web: DataTypes.STRING,
    imageURL: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Alojamiento',
  });
  return Alojamiento;
};