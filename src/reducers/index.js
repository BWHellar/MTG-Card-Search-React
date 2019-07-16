import { combineReducers } from 'redux';
import { SET_CARDS } from '../actions';

function cards(state = [], action) {
  switch(action.type){
    case SET_CARDS:
      return action.items;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ cards });

export default rootReducer;