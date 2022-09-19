module.exports = (sequelize, DataTypes) => {
  const alojamiento = sequelize.define('alojamiento', {
    id: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    precio: DataTypes.NUMBER,
    tipo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'alojamiento',
  });
  return alojamiento;
};
