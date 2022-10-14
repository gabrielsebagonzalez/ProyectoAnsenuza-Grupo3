const express = require('express');
const gastronomiaController = require('../controllers/gastronomia.controllers');

const app = express();

app.get('', gastronomiaController.gastronomiaInfo);

module.exports = app;
