const alojamientoService = require('../services/alojamiento.services');

async function getAll(data) {
    return alojamientoService.findAll();
}

async function getHoteles(data) {
    return alojamientoService.findHoteles();
}

async function getApartamentos(data) {
    return alojamientoService.findApartamentos();
}

async function getCasas(data) {
    return alojamientoService.findCasas();
}

async function getCabanas(data) {
    return alojamientoService.findCabanas();
}

async function getHostales(data) {
    return alojamientoService.findHostales();
}

async function getCampings(data) {
    return alojamientoService.findCampings();
}

async function setAlojamiento(dataAlojamiento) {
    return alojamientoService.createAlojamiento(dataAlojamiento);
}

async function deleteAlojamiento(id) {
    return alojamientoService.destroyAlojamiento(id);
}

async function updateAlojamiento(id) {
    return alojamientoService.updateAlojamiento(id);
}

module.exports = {
    getAll,
    getApartamentos,
    getCabanas,
    getCampings,
    getCasas,
    getHostales,
    getHoteles,
    setAlojamiento,
    deleteAlojamiento,
    updateAlojamiento,
};