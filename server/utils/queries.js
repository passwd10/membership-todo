const query = {
  getUID: 'SELECT uid FROM users WHERE user_id=?;',
  getBoardIds: 'SELECT board_id FROM boards WHERE users_uid=?;',
  addBoard: 'INSERT INTO boards VALUES (?, ?, ?);',
  getAllBoards: 'SELECT * FROM boards WHERE users_uid=?;',
  updateBoard: 'UPDATE boards Set board_title=? where users_uid=? and board_id=?;',
  deleteAllBoards: 'DELETE FROM boards WHERE users_uid=?;',
  deleteBoard: 'DELETE FROM boards WHERE users_uid=? and board_id=?;',

};

module.exports = query;
