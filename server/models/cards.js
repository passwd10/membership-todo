const db = require('./index');
const query = require('../utils/queries');
const { getUid, getRandomId } = require('../utils/db');

const getCardId = async() => {
  const newCardId = getRandomId();
  let existCardId = 1;
  while (existCardId === 1) {
    existCardId = [...await db.execute(query.isExistCardId, [newCardId])][0][0].success;
  }
  return newCardId;
};

const getCardsInfo = async(uid, boardId) => {
  const cardsInfo = [...await db.execute(query.getAllCardsInfo, [uid, boardId])][0].map(v =>
    v = { card_id: v.card_id,
      card_content: v.card_content,
      priority: v.priority,
      users_uid: v.users_uid,
      boards_board_id: v.boards_board_id,
    },
  );
  return cardsInfo;
};

const deleteCardsInfo = async(uid, boardId) => {
  await db.execute(query.deleteAllCardsInfo, [uid, boardId]);
};

const insertCards = async (allCards) => {
  for (let i = 0; i < allCards.length; i++) {
    await db.execute(query.insertCardsInfo, [
      allCards[i].card_id,
      allCards[i].card_content,
      allCards[i].priority,
      allCards[i].users_uid,
      allCards[i].boards_board_id,
    ]);
  }
};

const insertUserCard = async (userId, boardId, cardId, cardContent, priority) => {
  try {
    const uid = await getUid(userId);
    const thisCard = {
      card_id: cardId,
      card_content: cardContent,
      priority: priority,
      users_uid: uid,
      boards_board_id: boardId,
    };

    if (cardId === -1) {
      thisCard.card_id = await getCardId();
    }

    let allCards = [...await getCardsInfo(uid, boardId)].map(card => {
      if (thisCard.priority <= card.priority) {
        return card = {
          ...card,
          priority: card.priority + 1,
        };
      }
      return card;
    });

    allCards.splice(thisCard.priority, 0, thisCard);

    await deleteCardsInfo(uid, boardId);
    await insertCards(allCards);
    return { cardId: thisCard.card_id };
  } catch (error) {
    console.log(Error(error));
    return false;
  }
};

const selectCards = async (userId) => {
  try {
    const uid = await getUid(userId);
    return {
      'cards': [...await db.execute(query.getCards, [uid])][0].map(card =>
        card = {
          card_id: card.card_id,
          card_content: card.card_content,
          priority: card.priority,
          users_uid: card.users_uid,
          boards_board_id: card.boards_board_id,
        }),
    };
  } catch (error) {
    console.log(Error(error));
  }
};

const updateUserCard = async (userId, cardId, cardContent) => {
  try {
    const uid = await getUid(userId);
    await db.execute(query.updateCard, [cardContent, uid, cardId]);
    return true;
  } catch (error) {
    console.log(Error(error));
    return false;
  }
};

const deleteUserCard = async (userId, cardId, boardId) => {
  try {
    const uid = await getUid(userId);
    const thisPriority = [...await getCardsInfo(uid, boardId)].filter(card => cardId === card.card_id)[0].priority;
    const allCards = [...await getCardsInfo(uid, boardId)].filter(card => cardId !== card.card_id).map(card => {
      if (thisPriority < card.priority) {
        return card = {
          ...card,
          priority: card.priority - 1,
        };
      }
      return card;
    });
    await deleteCardsInfo(uid, boardId);
    await insertCards(allCards);
    return true;
  } catch (error) {
    console.log(Error(error));
    return false;
  }
};


module.exports = { insertUserCard, deleteUserCard, selectCards, updateUserCard };
