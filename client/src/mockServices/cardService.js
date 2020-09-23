class Card {
  constructor() {
    this.cards = [{
      boardId: 0,
      cardId: 0,
      cardContent: '알고리즘 문제 풀기',
    }];
  }

  getCards() {
    return this.cards;
  }

  addCard(boardId, cardContent) {
    const newCardId = this.cards.filter(card => card.boardId === boardId).length;
    const newCard = { boardId: boardId, cardId: newCardId, cardContent: cardContent };
    this.cards = [...this.cards, newCard];
  }

}

const card = new Card();

export default card;
