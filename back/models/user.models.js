
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    }

  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};