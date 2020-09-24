import board from '../mockServices/boardService';
import card from '../mockServices/cardService';

import { addBoard, addCard, cancelCard, deleteCard } from '../controlViews/boardEvents';

export default function KanbanBoard() {
  const kanbanBoard = document.createElement('div');
  kanbanBoard.classList.add('kanbanBoard');

  const handleKanbanBoardClickEvents = (event) => {
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

    if (targetClassName === 'delete_button') {
      const cardId = event.target.closest('.card').classList[1].split('_')[2];
      deleteCard(boardId, cardId);
    }
  };

  const handleKanbanBoardMouseDownEvents = (event) => {
    const boardClassName = event.target.closest('.board').className;
    const boardId = boardClassName[boardClassName.length - 1];
    const targetClassName = event.target.className;

    if (targetClassName.includes('card')) {
      const board = document.querySelector(`.board_${boardId}`);
      const cardList = board.querySelector('.cardList');
      const card = cardList.querySelector(`.${targetClassName.split(' ')[1]}`);

      const handleMouseMoveEvent = (e) => {
        card.style.position = 'absolute';
        card.style.top = `${e.clientY - 40}px`;
        card.style.left = `${e.clientX - 135}px`;
      };

      card.addEventListener('mousemove', handleMouseMoveEvent);
    }
  };

  kanbanBoard.addEventListener('click', handleKanbanBoardClickEvents);
  kanbanBoard.addEventListener('mousedown', handleKanbanBoardMouseDownEvents);

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
