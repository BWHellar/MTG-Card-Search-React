import { combineReducers } from 'redux';
import { SET_CARDS, FAVORITE_CARDS } from '../actions';

function cards(state = [], action) {
  switch(action.type){
    case SET_CARDS:
      return action.items;
    default:
      return state;
  }
}

function favoriteCard(state = [], action) {
  switch(action.type){
    case FAVORITE_CARDS:
      state=[...state, action.card]
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ cards, favoriteCard });

export default rootReducer;