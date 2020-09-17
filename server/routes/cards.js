const express = require('express');
const router = express.Router();

const { addCard } = require('../services/cardService');

router.post('/new', async (req, res) => {
  const { boardId, cardContent } = req.body;
  const isCompleted = await addCard(req.session.userId, boardId, cardContent, 0);

  return isCompleted ? res.status(200).send(true) : res.status(401).send(false);
});

module.exports = router;
