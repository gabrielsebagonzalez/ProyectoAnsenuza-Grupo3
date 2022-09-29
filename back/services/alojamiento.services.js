const alojamientoModel = require('../models').Alojamiento;

async function findAll() {
    const alojamientos = await alojamientoModel.findAll();
    return alojamientos;
  }
  
  module.exports = {
    findAll,
  };