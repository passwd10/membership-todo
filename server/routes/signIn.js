const express = require('express');
const router = express.Router();

const { isLoginable } = require('../services/userService');

router.post('/', async (req, res) => {
  const { userId, userPassword } = req.body;
  const isLogin = await isLoginable(userId, userPassword);
  req.session.userId = userId;
  return isLogin ? res.status(200).send(true) : res.status(401).send(false);
});

module.exports = router;
