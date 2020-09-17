const express = require('express');
const router = express.Router();

const { addBoard } = require('../services/boardService');

router.get('/', (req, res) => {
  res.send('tasks');
});

router.post('/', async(req, res) => {
  const { boardTitle } = req.body;

  const newBoardId = await addBoard(boardTitle, req.session.userId);

  res.send({ boardId: newBoardId });
});

module.exports = router;
