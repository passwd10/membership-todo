const { insertBoard, selectBoards, deleteUserBoards, deleteUserBoard, updateBoard } = require('../models/boards');

const addBoard = async (boardTitle, userId) => {
  const newBoardId = await insertBoard(boardTitle, userId);
  return newBoardId;
};

const getAllBoards = async (userId) => {
  const boards = await selectBoards(userId);
  return boards;
};

const modifyBoard = async (userId, boardId, boardTitle) => {
  return await updateBoard(userId, boardId, boardTitle);
};

const deleteAllUserBoards = async (userId) => {
  return await deleteUserBoards(userId);
};

const deleteBoard = async (userId, boardId) => {
  return await deleteUserBoard(userId, boardId);
};

module.exports = { addBoard, getAllBoards, deleteAllUserBoards, deleteBoard, modifyBoard };
