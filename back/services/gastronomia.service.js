const gastronomiaModel = require('../models/gastronomia.models');

async function findAll() {
    const alojamientos = await alojamientoModel.findAll();
    return alojamientos;
}

module.exports = {
    findAll,
}