const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const userRoute = require('./user.routes');
const alojamientosRoute = require('./alojamientos.routes');
const gastronomiaRoute = require('./gastronomia.routes');

// use
app.use('/ping', (_, res) => {
  res.json({
    response: 'pong!',
  });
});

app.use('/alojamientos', alojamientosRoute);

app.use('/gastronomias', gastronomiaRoute);

app.use('/users', userRoute);

app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
