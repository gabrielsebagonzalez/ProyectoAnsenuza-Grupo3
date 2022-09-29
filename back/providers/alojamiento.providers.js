const alojamientoService = require('../services/alojamiento.services');

async function getAll(data) {
    return alojamientoService.findAll();
}

module.exports = {
    getAll
  };