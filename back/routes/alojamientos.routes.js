const Express = require('express');
const multer = require('multer');
const alojamientoController = require('../controllers/alojamiento.controllers');

const upload = multer({ dest: `images/` });
const app = Express();

app.use(Express.static(__dirname+`/images/`));

app.get('', alojamientoController.alojamientosInfo);

app.post('', upload.single('imageURL'), alojamientoController.alojamientosNuevo);

app.delete('', alojamientoController.alojamientosBorrar);

app.update('', alojamientoController.alojamientosActualizar);

app.get('/images/:img', function(req, res){
    res.sendFile( __dirname+`/images/${img}` );
});

app.get('/hoteles', alojamientoController.alojamientosHoteles);

app.get('/apartamentos', alojamientoController.alojamientosApartamentos);

app.get('/casas', alojamientoController.alojamientosCasas);

app.get('/cabanas', alojamientoController.alojamientosCabanas);

app.get('/hostales', alojamientoController.alojamientosHostales);

app.get('/campings', alojamientoController.alojamientosCampings);

module.exports = app;
