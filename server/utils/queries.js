const query = {
  getUID: 'SELECT uid FROM users WHERE user_id=?;',
  getBoardIds: 'SELECT board_id FROM boards WHERE users_uid=?;',
  addBoard: 'INSERT INTO boards VALUES (?, ?, ?);',
  getAllBoards: 'SELECT * FROM boards WHERE users_uid=?;',
  updateBoard: 'UPDATE boards Set board_title=? where users_uid=? and board_id=?;',
  deleteAllBoards: 'DELETE FROM boards WHERE users_uid=?;',
  deleteBoard: 'DELETE FROM boards WHERE users_uid=? and board_id=?;',
  isExistCardId: 'select EXISTS (select * from cards where card_id=?) as success;',
  getAllCardsInfo: 'SELECT * FROM cards where users_uid=? and boards_board_id=?;',
  deleteAllCardsInfo: 'delete from cards where users_uid=? and boards_board_id=?;',
  insertCardsInfo: 'INSERT INTO cards VALUES (?, ?, ?, ?, ?)',
  getCards: 'SELECT * FROM cards WHERE users_uid=?;',
  updateCard: 'UPDATE cards Set card_content=? where users_uid=? and card_id=?;',
};

module.exports = query;
