module.exports = (sequelize, DataTypes) => {
  const alojamiento = sequelize.define('alojamiento', {
    id: {
      type: DataTypes.INTEGER(16),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
    tableName: 'alojamiento',
  });
  return alojamiento;
};
