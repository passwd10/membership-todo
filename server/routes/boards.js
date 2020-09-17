const express = require('express');
const router = express.Router();

const { addBoard, getAllBoards, deleteAllUserBoards, deleteBoard, modifyBoard } = require('../services/boardService');

router.get('/', async(req, res) => {
  const allBoards = await getAllBoards(req.session.userId);
  res.send(allBoards);
});

router.post('/', async(req, res) => {
  const { boardTitle } = req.body;
  const newBoardId = await addBoard(boardTitle, req.session.userId);
  res.send({ boardId: newBoardId });
});

router.put('/', async(req, res) => {
  const { boardId, boardTitle } = req.body;
  const isModify = await modifyBoard(req.session.userId, boardId, boardTitle);

  isModify ? res.status(200).send() : res.status(500).send();
});


router.delete('/', async(req, res) => {
  const { boardId } = req.body;
  const isDelete = await deleteBoard(req.session.userId, boardId);

  isDelete ? res.status(200).send() : res.status(500).send();
});


router.delete('/all', async(req, res) => {
  const isDeleteAll = await deleteAllUserBoards(req.session.userId);

  isDeleteAll ? res.status(200).send() : res.status(500).send();
});


module.exports = router;
