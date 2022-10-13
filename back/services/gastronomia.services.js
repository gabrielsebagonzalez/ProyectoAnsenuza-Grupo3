const gastronomiaModel = require('../models/gastronomia.models');

async function findAll() {
    const gastronomias = await gastronomiaModel.findAll();
    return gastronomias;
}

module.exports = {
    findAll,
}