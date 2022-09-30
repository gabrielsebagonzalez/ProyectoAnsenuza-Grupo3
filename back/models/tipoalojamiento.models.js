'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoAlojamiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TipoAlojamiento.hasMany(models.Alojamiento);
    }
  };
  TipoAlojamiento.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoAlojamiento',
  });
  return TipoAlojamiento;
};