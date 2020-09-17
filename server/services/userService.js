const { getUser } = require('../models/users');

const checkUserExist = async (userId, userPassword) => {
  const user = await getUser(userId, userPassword);
  if (user === undefined) {
    return false;
  }
  return true;
};

const isLoginable = async (userId, userPassword) => {
  return await checkUserExist(userId, userPassword);
};

module.exports = { isLoginable };

