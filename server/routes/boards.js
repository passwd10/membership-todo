const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('tasks');
});

router.post('/', (req, res) => {
  const { taskState } = req.body;
  res.send();
});

module.exports = router;
