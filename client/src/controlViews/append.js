const appendBoard = ({ index, boardTitle }) => {
  const kanbanBoard = document.querySelector('.kanbanBoard');
  kanbanBoard.insertAdjacentHTML('beforeend',
    `<div class='board board_${index}'>
      <div class='board_header'>
        ${boardTitle}
        <button class='board_button'>+</button>
        <div class='card_input board_${index} hidden'>
          <input class='card_content_input'></input>
          <button class='add_button'>Add</button>
          <button class='cancel_button'>Cancel</button>
        </div>
      </div>
      <ul class='cardList'>
      </ul>
    </div>`,
  );
};

const appendCard = ({ boardId, cardId, cardContent }) => {
  const board = document.querySelector(`.board_${boardId}`);
  const cardList = board.querySelector('.cardList');

  cardList.insertAdjacentHTML('beforeend',
    `<li class='card card_${boardId}_${cardId}'>
      ${cardContent}
     </li>
    `,
  );
};

export { appendBoard, appendCard };
