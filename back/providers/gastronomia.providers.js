const gastronomiaService = require('../services/gastronomia.services');
const { setAlojamiento } = require('./alojamiento.providers');

async function getAll(data) {
    return gastronomiaService.findAll();
}

async function setGastronomia(data) {
    return gastronomiaService.createGastronomia(data)
}

module.exports = {
    getAll,
    setGastronomia,
}