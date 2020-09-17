const db = require('./index');
const query = require('../utils/queries');
const { getUid } = require('../utils/db');

const insertBoard = async (boardTitle, userId) => {
  try {
    const uid = await getUid(userId);
    const boardIds = [...await db.execute(query.getBoardIds, [uid])][0].map(v => v.board_id);
    const newBoardId = boardIds.length === 0 ? 1 : boardIds[boardIds.length - 1] + 1;
    await db.execute(query.addBoard, [newBoardId, boardTitle, uid]);

    return newBoardId;
  } catch (error) {
    console.log(Error(error));
  }
};

const selectBoards = async (userId) => {
  try {
    const uid = await getUid(userId);
    const allBoards = { 'boards': [...await db.execute(query.getAllBoards, [uid])][0].map(v => v = { 'boardId': v.board_id, 'boardTitle': v.board_title }) };

    return allBoards;
  } catch (error) {
    console.log(Error(error));
  }
};

const updateBoard = async (userId, boardId, boardTitle) => {
  try {
    const uid = await getUid(userId);
    await db.execute(query.updateBoard, [boardTitle, uid, boardId]);
    return true;
  } catch (error) {
    console.log(Error(error));
    return false;
  }
};

const deleteUserBoards = async (userId) => {
  try {
    const uid = await getUid(userId);
    await db.execute(query.deleteAllBoards, [uid]);
    return true;
  } catch (error) {
    console.log(Error(error));
    return false;
  }
};

const deleteUserBoard = async (userId, boardId) => {
  try {
    const uid = await getUid(userId);
    await db.execute(query.deleteBoard, [uid, boardId]);
    return true;
  } catch (error) {
    console.log(Error(error));
    return false;
  }
};


module.exports = { insertBoard, selectBoards, deleteUserBoards, deleteUserBoard, updateBoard };
