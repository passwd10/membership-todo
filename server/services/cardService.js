const { insertUserCard } = require('../models/cards');

const addCard = async (userId, boardId, cardContent, priority) => {
  return await insertUserCard(userId, boardId, cardContent, priority);
};

module.exports = { addCard };
