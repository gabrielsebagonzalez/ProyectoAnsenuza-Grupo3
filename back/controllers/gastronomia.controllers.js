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

module.exports = {
  gastronomiaInfo
};
