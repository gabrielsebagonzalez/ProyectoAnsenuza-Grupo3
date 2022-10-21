const userProvider = require('../providers/user.providers');

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userProvider.login(username, password);

    res.json(user);
  } catch (error) {
    next(error);
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function userInfo(req, res, next) {
  try {
    const userData = await userProvider.getOne({
      id: req.user.id,
    });
    res.json(userData);
  } catch (error) {
    next(error);
  }
}

async function userRegister(req, res, next) {
  try {
    dataUser = {
      username: req.body.username,
      password: req.body.password,
    }
    await userProvider.setUser(dataUser);

    res.status(200).send('Done!');
    
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  userInfo,
  userRegister,
};
