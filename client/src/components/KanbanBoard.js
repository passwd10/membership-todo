import board from '../mockServices/boardService';
import card from '../mockServices/cardService';

export default function KanbanBoard() {
  const kanbanBoard = document.createElement('div');
  kanbanBoard.classList.add('kanbanBoard');

  const addBoard = (boardId) => {
    const board = kanbanBoard.querySelector(`.board_${boardId}`);
    const boardHeader = board.querySelector('.board_header');

    boardHeader.querySelector('.card_input').classList.remove('hidden');
  };

  const addCard = (boardId) => {
    const board = kanbanBoard.querySelector(`.board_${boardId}`);
    const cardContent = board.querySelector('.card_content_input').value;

    card.addCard(Number(boardId), cardContent);
    board.querySelector('.card_input').classList.add('hidden');
  };

  const cancelCard = (boardId) => {
    const board = kanbanBoard.querySelector(`.board_${boardId}`);

    board.querySelector('.card_input').classList.add('hidden');
  };

  const handleKanbanBoardEvents = (event) => {
    const boardClassName = event.target.closest('.board').className;
    const boardId = boardClassName[boardClassName.length - 1];
    const targetClassName = event.target.className;

    if (targetClassName === 'board_button') {
      addBoard(boardId);
    }

    if (targetClassName === 'add_button') {
      addCard(boardId);
    }

    if (targetClassName === 'cancel_button') {
      cancelCard(boardId);
    }
  };

  kanbanBoard.addEventListener('click', handleKanbanBoardEvents);

  const render = () => {
    const boards = board.getBoards();
    const cards = card.getCards();

    kanbanBoard.innerHTML = boards.reduce((acc, board) => {
      const boardCards = cards.filter(card => card.boardId === board.index);
      const boardCardsStr = boardCards.reduce((accCards, boardCard) => {
        return accCards += `
        <li class='card card_${board.index}_${boardCard.cardId}'>
          ${boardCard.cardContent}
          <button class='delete_button'>X</button>
        </li>`;
      }, '');

      return acc +=
      `<div class='board board_${board.index}'>
        <div class='board_header'>
          ${board.boardTitle}
          <button class='board_button'>+</button>
          <div class='card_input board_${board.index} hidden'>
            <input class='card_content_input'></input>
            <button class='add_button'>Add</button>
            <button class='cancel_button'>Cancel</button>
          </div>
        </div>
        <ul class='cardList'>
          ${boardCardsStr}
        </ul>
      </div>`;
    }, '');
    return kanbanBoard;
  };

  return render();
}
