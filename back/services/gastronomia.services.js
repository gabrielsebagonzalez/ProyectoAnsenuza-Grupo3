const gastronomiaModel = require('../models').Gastronomia;

async function findAll() {
  const gastronomias = await gastronomiaModel.findAll(
    {
      attributes: ['id', 'name', 'ubication', 'phoneNumber', 'tipoGastronomiaId'],
    },
  );
  return gastronomias;
}

async function createGastronomia(data) {
  const nuevaGastronomia = await gastronomiaModel.create(
    data = {
      name: data.name,
      ubication: data.ubication,
      phoneNumber: data.phoneNumber,
      tipoGastronomiaId: data.tipoGastronomiaId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  );
  return nuevaGastronomia;
}

module.exports = {
  findAll,
  createGastronomia,
};
