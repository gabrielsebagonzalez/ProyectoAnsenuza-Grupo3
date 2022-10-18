const userModel = require('../models').user;
const bcrypt = require('bcrypt');

async function findOne(data, attributes = null) {
  const user = await userModel.findOne({ where: data, attributes });
  return user;
}

async function createUser(data) {
  const newUser = await userModel.create(
    data = {
      username: data.username,
      password: await bcrypt.hash(data.password, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }   
  );
  return newUser;
}

module.exports = {
  findOne,
  createUser,
};
