module.exports = (sequelize, DataTypes) => {
  const alojamiento = sequelize.define('tipo_alojamiento', {
    id: {
      type: DataTypes.INTEGER(16),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
    tableName: 'tipo_alojamiento',
  });
  return alojamiento;
};
