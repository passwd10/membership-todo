import { appendBoard } from '../components/KanbanBoard';

class Board {
  constructor() {
    this.boards = [{
      index: 0,
      boardTitle: 'Todo',
    }];
  }

  getBoards() {
    return this.boards;
  }

  addBoard(boardTitle) {
    const newBoard = { index: this.boards.length, boardTitle: boardTitle };
    this.boards = [...this.boards, newBoard];
    appendBoard(newBoard);
  }

}

const board = new Board();

export default board;
