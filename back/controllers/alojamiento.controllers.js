const alojamientoProvider = require('../providers/alojamiento.providers');

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
    try {
      await alojamientoProvider.setAlojamiento();
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
  };
  