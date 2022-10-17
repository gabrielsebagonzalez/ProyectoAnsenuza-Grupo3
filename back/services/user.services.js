const userModel = require('../models').user;

async function findOne(data, attributes = null) {
  const user = await userModel.findOne({ where: data, attributes });
  return user;
}

async function createUser(data) {
  const newUser = await userModel.create(
    data = {
      username: data.username,
      password: data.password,
    }   
  );
  return newUser;
}

module.exports = {
  findOne,
  createUser,
};
