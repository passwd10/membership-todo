const { getUser } = require('../models/users');
const session = require('express-session');

const checkUserExist = async (userId, userPassword) => {
  const user = await getUser(userId, userPassword);
  if (user === undefined) {
    return false;
  }
  storeIdInSession(userId);
  return true;
};

const isLoginable = async (userId, userPassword) => {
  return await checkUserExist(userId, userPassword);
};

const storeIdInSession = (userId) => {
  return session.Store = userId;
};

module.exports = { isLoginable };

