const express = require('express');
const router = express.Router();

const { isLoginable } = require('../services/userService');

router.post('/', async (req, res) => {
  const { userId, userPassword } = req.body;
  const isLogin = await isLoginable(userId, userPassword);

  if (isLogin) {
    const hour = 3600000;
    req.session.cookie.path = '/';
    req.session.cookie.domain = 'boostcamp-todo.netlify.app';
    req.session.cookie.expires = new Date(Date.now() + hour);
    req.session.cookie.maxAge = hour;
    req.session.userId = userId;
  }

  isLogin ? res.status(200).send(true) : res.status(401).send(false);
});

module.exports = router;
