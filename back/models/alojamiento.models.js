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
    }
  };
  Alojamiento.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ubication: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    tipoAlojamiento: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Alojamiento',
  });
  return Alojamiento;
};