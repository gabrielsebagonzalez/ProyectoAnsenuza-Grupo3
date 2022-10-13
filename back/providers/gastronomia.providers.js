const gastronomiaService = require('../services/gastronomia.services');

async function getAll(data) {
    return gastronomiaService.findAll();
}

module.exports = {
    getAll,
}