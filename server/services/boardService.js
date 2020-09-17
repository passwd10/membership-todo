const { insertBoard, selectBoards, deleteUserBoards } = require('../models/boards');

const addBoard = async (boardTitle, userId) => {
  const newBoardId = await insertBoard(boardTitle, userId);
  return newBoardId;
};

const getAllBoards = async (userId) => {
  const boards = await selectBoards(userId);
  return boards;
};

const deleteAllUserBoards = async (userId) => {
  return await deleteUserBoards(userId);
};

module.exports = { addBoard, getAllBoards, deleteAllUserBoards };
