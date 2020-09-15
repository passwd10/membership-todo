const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { taskState } = req.body;
  res.send();
});

module.exports = router;
