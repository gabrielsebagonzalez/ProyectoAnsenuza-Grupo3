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

module.exports = {
    alojamientosInfo,
  };
  