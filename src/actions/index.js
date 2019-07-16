export const SET_CARDS = 'SET_CARDS';
export const FAVORITE_CARDS = "FAVORITE_CARDS";

export function setCards(items){
  return {
    type: SET_CARDS,
    items
  }
}

export function favoriteCard(card) {
  return {
    type: FAVORITE_CARDS,
    card
  }
}