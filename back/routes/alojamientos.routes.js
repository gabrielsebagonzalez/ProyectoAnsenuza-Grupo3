const Express = require('express');
const alojamientoController = require('../controllers/alojamiento.controllers');

const app = Express();

app.get('', alojamientoController.alojamientosInfo);

app.post('', alojamientoController.alojamientosNuevo);

app.get('/hoteles', alojamientoController.alojamientosHoteles);

app.get('/apartamentos', alojamientoController.alojamientosApartamentos);

app.get('/casas', alojamientoController.alojamientosCasas);

app.get('/cabanas', alojamientoController.alojamientosCabanas);

app.get('/hostales', alojamientoController.alojamientosHostales);

app.get('/campings', alojamientoController.alojamientosCampings);

module.exports = app;
