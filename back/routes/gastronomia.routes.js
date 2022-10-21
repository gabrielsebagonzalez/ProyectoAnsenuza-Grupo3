const express = require('express');
const gastronomiaController = require('../controllers/gastronomia.controllers');

const app = express();

app.get('', gastronomiaController.gastronomiaInfo);

app.post('', gastronomiaController.gastronomiaNuevo);

module.exports = app;
