const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  req.session.destroy();
  res.status(200).send(true);
});

module.exports = router;
