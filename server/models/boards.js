const db = require('./index');

const insertBoard = async (boardTitle, userId) => {
  try {
    //UID를 가져옴
    const getUID = `SELECT uid FROM users WHERE user_id='${userId}';`;
    const uid = [...await db.query(getUID)][0][0].uid;

    //모든 보드아이디를 가져옴
    const getBoardIds = `SELECT board_id FROM boards WHERE users_uid=${uid};`;
    const boardIds = [...await db.query(getBoardIds)][0].map(v => v.board_id);

    //새 보드아이디를 만듬
    const newBoardId = boardIds.length === 0 ? 1 : boardIds[boardIds.length - 1] + 1;

    //삽입
    const addBoardQuery = `INSERT INTO boards VALUES (${newBoardId}, '${boardTitle}', ${uid});`;

    await db.query(addBoardQuery);

    return newBoardId;
  } catch (error) {
    console.log(Error(error));
  }
};

const selectBoards = async (userId) => {
  try {
    //UID를 가져옴
    const getUID = `SELECT uid FROM users WHERE user_id='${userId}';`;
    const uid = [...await db.query(getUID)][0][0].uid;

    //모든 보드아이디를 가져옴
    const getAllBoards = `SELECT * FROM boards WHERE users_uid=${uid};`;
    const allBoards = { 'boards': [...await db.query(getAllBoards)][0].map(v => v = { 'boardId': v.board_id, 'boardTitle': v.board_title }) };

    return allBoards;
  } catch (error) {
    console.log(Error(error));
  }
};

const deleteUserBoards = async (userId) => {
  try {
    //UID를 가져옴
    const getUID = `SELECT uid FROM users WHERE user_id='${userId}';`;
    const uid = [...await db.query(getUID)][0][0].uid;

    //유저와관련한 컬럼삭제
    const getAllBoards = `DELETE FROM boards WHERE users_uid=${uid};`;
    await db.query(getAllBoards);
    return true;
  } catch (error) {
    console.log(Error(error));
    return false;
  }
};



module.exports = { insertBoard, selectBoards, deleteUserBoards };
