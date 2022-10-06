const Express = require('express');
const multer = require('multer');
const alojamientoController = require('../controllers/alojamiento.controllers');

const upload = multer({ dest: './dist/images/' });
const app = Express();

app.get('', alojamientoController.alojamientosInfo);

app.post('', upload.single('image'), alojamientoController.alojamientosNuevo);

app.get('/hoteles', alojamientoController.alojamientosHoteles);

app.get('/apartamentos', alojamientoController.alojamientosApartamentos);

app.get('/casas', alojamientoController.alojamientosCasas);

app.get('/cabanas', alojamientoController.alojamientosCabanas);

app.get('/hostales', alojamientoController.alojamientosHostales);

app.get('/campings', alojamientoController.alojamientosCampings);

module.exports = app;
