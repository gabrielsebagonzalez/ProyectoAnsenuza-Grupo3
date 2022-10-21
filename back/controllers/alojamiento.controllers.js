const alojamientoProvider = require('../providers/alojamiento.providers');
const fs = require('fs');

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

 async function alojamientosInfo(req, res, next) {
    try {
      const alojamientosData = await alojamientoProvider.getAll();
      res.json(alojamientosData);
    } catch (error) {
      next(error);
    }
  }

  async function alojamientosHoteles(req, res, next) {
    try {
      const alojamientosHoteles = await alojamientoProvider.getHoteles();
      res.json(alojamientosHoteles);
    } catch (error) {
      next(error);
    }
  }

  async function alojamientosApartamentos(req, res, next) {
    try {
      const alojamientosApartamentos = await alojamientoProvider.getApartamentos();
      res.json(alojamientosApartamentos);
    } catch (error) {
      next(error);
    }
  }

  async function alojamientosCasas(req, res, next) {
    try {
      const alojamientosCasas = await alojamientoProvider.getCasas();
      res.json(alojamientosCasas);
    } catch (error) {
      next(error);
    }
  }

  async function alojamientosCabanas(req, res, next) {
    try {
      const alojamientosCabanas = await alojamientoProvider.getCabanas();
      res.json(alojamientosCabanas);
    } catch (error) {
      next(error);
    }
  }

  async function alojamientosHostales(req, res, next) {
    try {
      const alojamientosHostales = await alojamientoProvider.getHostales();
      res.json(alojamientosHostales);
    } catch (error) {
      next(error);
    }
  }

  async function alojamientosCampings(req, res, next) {
    try {
      const alojamientosCampings = await alojamientoProvider.getCampings();
      res.json(alojamientosCampings);
    } catch (error) {
      next(error);
    }
  }
  
  async function alojamientosNuevo(req, res, next) {

    const pathFile = req.file.path;

    try {

      fs.rename(`${pathFile}`, `${pathFile}.png`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
      });

      dataAlojamiento = {
        name: req.body.name,
        description: req.body.description,
        ubication: req.body.address,
        phoneNumber: req.body.phoneNumber,
        tipoAlojamientoId: Number(req.body.typeAlojamientoId),
        email: req.body.email,
        web: req.body.web,
        imageURL: `${pathFile}.png`,
      }
      
      await alojamientoProvider.setAlojamiento(dataAlojamiento);
      
      res.status(200).send('Done!');
      
    } catch (error) {
      next(error);
    }
  }

  async function alojamientosBorrar(req, res, next) {
    try {
      await alojamientoProvider.deleteAlojamiento(req.query.id);
    } catch (error) {
      next(error);
    }
  }

  async function alojamientosActualizar(req, res, next) {
    try {
      await alojamientoProvider.updateAlojamiento(req.query.id);
    } catch (error) {
      next(error);
    }
  }

module.exports = {
    alojamientosInfo,
    alojamientosApartamentos,
    alojamientosCabanas,
    alojamientosCampings,
    alojamientosCasas,
    alojamientosHostales,
    alojamientosHoteles,
    alojamientosNuevo,
    alojamientosBorrar,
    alojamientosActualizar
  };
  