const express = require('express');
const router = express.Router();

const { getCards, addCard, deleteCard } = require('../services/cardService');

router.get('/', async (req, res) => {
  const cards = await getCards(req.session.userId);

  return res.status(200).send(cards);
});


router.post('/new', async (req, res) => {
  const { boardId, cardContent } = req.body;
  const isCompleted = await addCard(req.session.userId, boardId, cardContent, 0);

  return isCompleted ? res.status(200).send(true) : res.status(401).send(false);
});

router.post('/', async (req, res) => {
  const { boardId, cardContent, priority } = req.body;
  const isCompleted = await addCard(req.session.userId, boardId, cardContent, priority);

  return isCompleted ? res.status(200).send(true) : res.status(401).send(false);
});

router.delete('/', async (req, res) => {
  const { cardId, boardId } = req.body;
  const isCompleted = await deleteCard(req.session.userId, cardId, boardId);

  return isCompleted ? res.status(200).send(true) : res.status(401).send(false);
});


module.exports = router;
