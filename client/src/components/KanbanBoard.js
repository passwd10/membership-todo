import board from '../mockServices/boardService';
import card from '../mockServices/cardService';

export default function KanbanBoard() {
  const kanbanBoard = document.createElement('div');
  kanbanBoard.classList.add('kanbanBoard');

  const render = () => {
    const boards = board.getBoards();
    const cards = card.getCards();

    kanbanBoard.innerHTML = boards.reduce((acc, board) => {
      const boardCards = cards.filter(card => card.boardId === board.index);
      const boardCardsStr = boardCards.reduce((accCards, boardCard) => {
        return accCards += `<li class='card card_${board.index}_${boardCard.cardId}'>${boardCard.cardContent}</li>`;
      }, '');

      return acc +=
      `<div class='board board_${board.index}'>
        ${board.boardTitle}
        <button class='board_button board_${board.index}_button'>+</button>
        <ul class='cardList'>
          ${boardCardsStr}
        </ul>
      </div>`;
    }, '');
    return kanbanBoard;
  };

  return render();
}

const appendBoard = ({ index, boardTitle }) => {
  const kanbanBoard = document.querySelector('.kanbanBoard');
  kanbanBoard.insertAdjacentHTML('beforeend',
    `<div class='board board_${index}'>
        ${boardTitle}
        <button class='board_button board_${index}_button'>+</button>
      </div>`,
  );
};

const appendCard = ({ boardId, cardContent }) => {
  // const kanbanBoard = document.querySelector('.kanbanBoard');
  // kanbanBoard.insertAdjacentHTML('beforeend',
  //   `<div class='board board_${index}'>
  //       ${boardTitle}
  //       <button class='board_button board_${index}_button'>+</button>
  //     </div>`,
  // );
};

export { appendBoard };
