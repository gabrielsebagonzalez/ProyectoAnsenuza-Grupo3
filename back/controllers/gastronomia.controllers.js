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
        name: req.body.name,
        ubication: req.body.ubication,
        phoneNumber: req.body.phoneNumber,
        tipoGastronomiaId: Number(req.body.tipoGastronomiaId),
      }
      await gastronomiaProvider.setGastronomia(dataGastronomia);
      
      res.status(200).send('Done!');

    } catch(error) {
      next(error);
    }

  }

module.exports = {
  gastronomiaInfo,
  gastronomiaNuevo,
};
