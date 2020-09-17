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

module.exports = { insertBoard };
