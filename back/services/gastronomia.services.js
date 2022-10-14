const gastronomiaModel = require('../models').Gastronomia;

async function findAll() {
  const gastronomias = await gastronomiaModel.findAll(
    {
      attributes: ['id', 'name', 'ubication', 'phoneNumber', 'tipoGastronomiaId'],
    },
  );
  return gastronomias;
}

module.exports = {
  findAll,
};
