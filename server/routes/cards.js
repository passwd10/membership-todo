const express = require('express');
const router = express.Router();

const { getCards, addCard, deleteCard, modifyCard, moveCard } = require('../services/cardService');

router.get('/', async (req, res) => {
  const cards = await getCards(req.session.userId);

  return res.status(200).send(cards);
});

router.post('/new', async (req, res) => {
  const { boardId, cardContent } = req.body;
  const cardId = await addCard(req.session.userId, boardId, cardContent, 0);

  return res.status(200).send(cardId);
});

router.post('/', async (req, res) => {
  const { cardId, boardId, cardContent, priority } = req.body;
  await moveCard(req.session.userId, boardId, cardId, cardContent, priority);

  return res.status(200).send(true);
});

router.put('/', async (req, res) => {
  const { cardId, cardContent } = req.body;
  const isCompleted = await modifyCard(req.session.userId, cardId, cardContent);

  return isCompleted ? res.status(200).send(true) : res.status(401).send(false);
});

router.delete('/', async (req, res) => {
  const { cardId, boardId } = req.body;
  const isCompleted = await deleteCard(req.session.userId, cardId, boardId);

  return isCompleted ? res.status(200).send(true) : res.status(401).send(false);
});


module.exports = router;
