import { appendCard } from '../controlViews/append';

class Card {
  constructor() {
    this.cards = [{
      boardId: 0,
      cardId: 0,
      cardContent: '알고리즘 문제 풀기',
    },
    {
      boardId: 0,
      cardId: 1,
      cardContent: 'CS 공부하기',
    },
    ];
  }

  getCards() {
    return this.cards;
  }

  addCard(boardId, cardContent) {
    const newCardId = this.cards.filter(card => card.boardId === Number(boardId)).length;
    const newCard = { boardId: boardId, cardId: newCardId, cardContent: cardContent };
    this.cards = [...this.cards, newCard];
    appendCard(newCard);
  }

}

const card = new Card();

export default card;
