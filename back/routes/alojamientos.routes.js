const Express = require('express');
const alojamientoController = require('../controllers/alojamiento.controllers');

const app = Express();

// data false
const dataFalse = {
  hotel: [
    {
      id: 1,
      nombre: 'Casa Blanca',
      descripcion: 'Hermoso, cerca del lago',
      ubicacion: 'Larrañaga 37',
      telefono: '351233223',
      precio: 5000,
      tipo_alojamiento: 3,
    },
    {
      id: 2,
      nombre: 'Cuesta Grande',
      descripcion: 'Hermoso, cerca del lago',
      ubicacion: 'Larrañaga 38',
      telefono: '351989898',
      precio: 7000,
      tipo_alojamiento: 2,
    },
    {
      id: 3,
      nombre: 'Doña Pocha',
      descripcion: 'Hermosa, Buena vista',
      ubicacion: 'Salta 45',
      telefono: '351234454',
      precio: 3000,
      tipo_alojamiento: 1,
    },
    {
      id: 4,
      nombre: 'Don Carlos',
      descripcion: 'Hermosa, linda ubicacion',
      ubicacion: 'Laplace 202',
      telefono: '354234321',
      precio: 2000,
      tipo_alojamiento: 4,
    },
    {
      id: 5,
      nombre: 'Isla Bonita',
      descripcion: 'Hermosa, linda ubicacion',
      ubicacion: 'Cuenca 312',
      telefono: '351768987',
      precio: 3000,
      tipo_alojamiento: 6,
    },
    {
      id:6,
      nombre: 'Bella Vista',
      descripcion: 'Hermosa, linda ubicacion',
      ubicacion: 'Cuenca 370',
      telefono: '351329807',
      precio: 4500,
      tipo_alojamiento: 5,
    }
  ],
  cabaña: [
    {
      id: 1,
      nombre: 'Doña Pocha',
      descripcion: 'Hermosa, Buena vista',
      ubicacion: 'Salta 45',
      telefono: '351234454',
      precio: 3000,
      tipo_alojamiento: 1,
    },
    {
      id: 2,
      nombre: 'Don Carlos',
      descripcion: 'Hermosa, linda ubicacion',
      ubicacion: 'Messi 101',
      telefono: '351234433',
      precio: 2000,
      tipo_alojamiento: 1,
    },
  ],

};

app.get('', alojamientoController.alojamientosInfo);

app.post('', (_, res) => {
  res.send('Creando Alojamiento...');
});

app.get('/hoteles', (_, res) => {
  const hoteles = dataFalse.hotel;
  res.send(JSON.stringify(hoteles));
});

app.get('/cabanas', (_, res) => {
  const cabanas = dataFalse.cabaña;
  res.send(JSON.stringify(cabanas));
});

app.get('/campings', (_, res) => {
  const campings = dataFalse.camping;
  res.send(JSON.stringify(campings));
});

app.get('/hostales', (_, res) => {
  const hostales = dataFalse.hostal;
  res.send(JSON.stringify(hostales));
});

app.get('/apartamentos', (_, res) => {
  const apartamentos = dataFalse.apartamento;
  res.send(JSON.stringify(apartamentos));
});

app.get('/casas', (req, res) => {
  const casas = dataFalse.casa;
  res.send(JSON.stringify(casas));
});

module.exports = app;
