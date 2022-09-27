const Express = require('express');

const app = Express();

// data false
const dataFalse = {
  Hotel: [
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
      tipo_alojamiento: 3,
    },
  ],
  Cabaña: [
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

app.get('', (req, res) => {
  res.send(JSON.stringify(dataFalse));
});

app.post('', (req, res) => {
  res.send('Creando Alojamiento...');
});

module.exports = app;
