import board from '../mockServices/boardService';

export default function KanbanBoard() {
  const kanbanBoard = document.createElement('div');
  kanbanBoard.classList.add('kanbanBoard');

  const render = () => {
    const boards = board.getBoards();
    kanbanBoard.innerHTML = boards.reduce((acc, board) => {
      return acc +=
      `<div id=board_${board.index}>
        ${board.boardTitle}
        <button id=board_${board.index}_button>+</button>                
      </div>`;
    }, '');
    return kanbanBoard;
  };

  return render();
}

const appendBoard = ({ index, boardTitle }) => {
  const kanbanBoard = document.querySelector('.kanbanBoard');
  kanbanBoard.insertAdjacentHTML('beforeend',
    `<div id=board_${index}>
        ${boardTitle}
        <button id=board_${index}_button>+</button>
      </div>`,
  );
};

export { appendBoard };
