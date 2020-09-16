const express = require('express');
const router = express.Router();

const { isLoginable } = require('../services/userService');

router.post('/', async (req, res) => {
  const { userId, userPassword } = req.body;
  const isLogin = await isLoginable(userId, userPassword);
  return isLogin ? res.status(200).send(true) : res.status(404).send(false);
});

module.exports = router;
