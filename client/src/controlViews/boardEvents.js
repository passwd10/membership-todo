import card from '../mockServices/cardService';

const addBoard = (boardId) => {
  const board = document.querySelector(`.board_${boardId}`);
  const boardHeader = board.querySelector('.board_header');

  boardHeader.querySelector('.card_input').classList.remove('hidden');
};

const addCard = (boardId) => {
  const board = document.querySelector(`.board_${boardId}`);
  const cardContent = board.querySelector('.card_content_input').value;

  card.addCard(Number(boardId), cardContent);
  board.querySelector('.card_input').classList.add('hidden');
};

const cancelCard = (boardId) => {
  const board = document.querySelector(`.board_${boardId}`);

  board.querySelector('.card_input').classList.add('hidden');
};

const deleteCard = (boardId, cardId) => {
  const board = document.querySelector(`.board_${boardId}`);
  const cardList = board.querySelector('.cardList');
  const deletedCard = cardList.querySelector(`.card_${boardId}_${cardId}`);

  card.deleteCard(Number(boardId), Number(cardId));
  cardList.removeChild(deletedCard);

  const listCards = cardList.querySelectorAll('.card');

  listCards.forEach((listCard, index) => {
    const originClassName = listCard.classList[1];
    listCard.classList.replace(originClassName, `card_${boardId}_${index}`);
  });
};

export { addBoard, addCard, cancelCard, deleteCard };
