class Board {
  constructor() {
    this.boards = [];
  }

  getBoards() {
    return this.boards;
  }

  addBoard(boardTitle) {
    this.boards = [...this.boards, { index: this.boards.length, boardTitle: boardTitle }];
  }

}

const board = new Board();

export default board;
