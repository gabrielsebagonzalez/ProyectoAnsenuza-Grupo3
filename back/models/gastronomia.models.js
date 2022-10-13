'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gastronomia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Gastronomia.init({
    name: DataTypes.STRING,
    ubication: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    tipoGastronomiaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Gastronomia',
  });
  return Gastronomia;
};