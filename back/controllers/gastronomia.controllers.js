const gastronomiaProvider = require('../providers/gastronomia.providers');

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

 async function gastronomiaInfo(req, res, next) {
    try {
      const gastronomiaData = await gastronomiaProvider.getAll();
      res.json(gastronomiaData);
    } catch (error) {
      next(error);
    }
  }

  async function gastronomiaNuevo(req, res, next) {
    try {
      dataGastronomia = {
        name: req.name,
        ubication: req.ubication,
        phoneNumber: req.phoneNumber,
        tipoGastronomiaId: req.tipoGastronomiaId,


      }
    } catch(error) {
      next(error)
    }

  }

module.exports = {
  gastronomiaInfo,
  gastronomiaNuevo,
};
