const { selectCards, insertUserCard, deleteUserCard, updateUserCard } = require('../models/cards');

const getCards = async(userId) => {
  return await selectCards(userId);
};

const addCard = async (userId, boardId, cardContent, priority) => {
  return await insertUserCard(userId, boardId, cardContent, priority);
};

const deleteCard = async (userId, cardId, boardId) => {
  return await deleteUserCard(userId, cardId, boardId);
};

const modifyCard = async (userId, cardId, cardContent) => {
  return await updateUserCard(userId, cardId, cardContent);
};

module.exports = { addCard, deleteCard, getCards, modifyCard };
