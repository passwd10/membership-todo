const express = require('express');
const router = express.Router();

const { addBoard, getAllBoards, deleteAllUserBoards } = require('../services/boardService');

router.get('/', async(req, res) => {
  const allBoards = await getAllBoards(req.session.userId);
  res.send(allBoards);
});

router.post('/', async(req, res) => {
  const { boardTitle } = req.body;
  const newBoardId = await addBoard(boardTitle, req.session.userId);
  res.send({ boardId: newBoardId });
});

router.delete('/all', async(req, res) => {
  const isDeleteAll = await deleteAllUserBoards(req.session.userId);

  isDeleteAll ? res.status(200).send() : res.status(500).send();
});


module.exports = router;
