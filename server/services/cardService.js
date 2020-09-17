const { selectCards, insertUserCard, deleteUserCard } = require('../models/cards');

const getCards = async(userId) => {
  return await selectCards(userId);
};

const addCard = async (userId, boardId, cardContent, priority) => {
  return await insertUserCard(userId, boardId, cardContent, priority);
};

const deleteCard = async (userId, cardId, boardId) => {
  return await deleteUserCard(userId, cardId, boardId);
};

module.exports = { addCard, deleteCard, getCards };
