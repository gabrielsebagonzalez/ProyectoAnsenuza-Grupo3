const alojamientoModel = require('../models').Alojamiento;

async function findAll() {
  const alojamientos = await alojamientoModel.findAll();
  return alojamientos;
}

async function findHoteles() {
  const hoteles = await alojamientoModel.findAll(
    {
      where: {
        tipoAlojamientoId: 1
      }
    });
  
  return hoteles;
}

async function findApartamentos() {
  const apartamentos = await alojamientoModel.findAll(
    {
      where: {
        tipoAlojamientoId: 2
      }
    });
  
  return apartamentos;
}

async function findCasas() {
  const casas = await alojamientoModel.findAll(
    {
      where: {
        tipoAlojamientoId: 3
      }
    });
  
  return casas;
}

async function findCabanas() {
  const cabanas = await alojamientoModel.findAll(
    {
      where: {
        tipoAlojamientoId: 4
      }
    });
  
  return cabanas;
}

async function findHostales() {
  const hostales = await alojamientoModel.findAll(
    {
      where: {
        tipoAlojamientoId: 5
      }
    });
  
  return hostales;
}

async function findCampings() {
  const campings = await alojamientoModel.findAll(
    {
      where: {
        tipoAlojamientoId: 6
      }
    });
  
  return campings;
}

async function createAlojamiento() {
  const nuevoAlojamiento = await alojamientoModel.create(
    { 
      name: "Nuevo Alojamiento", 
      description: "Test 1",
      ubication: "Test 1",
      phoneNumber: "123456789",
      tipoAlojamientoId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  );
  return nuevoAlojamiento;
}

module.exports = {
  findAll,
  findApartamentos,
  findCabanas,
  findCampings,
  findCasas,
  findHostales,
  findHoteles,
  createAlojamiento,
};