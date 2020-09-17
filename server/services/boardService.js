const { insertBoard } = require('../models/boards');

const addBoard = async (boardTitle, userId) => {
  const newBoardId = await insertBoard(boardTitle, userId);
  return newBoardId;
};

module.exports = { addBoard };
