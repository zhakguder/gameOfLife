import { SEND_LIVE } from "../actions/types";
// randomly initialize a  gameboard (pick alive cells)

import { combineReducers } from "redux";
const gameReducer = (
  state = { lifeArray: new Array(100).fill(false) },
  action
) => {
  switch (action.type) {
    case SEND_LIVE:
      var currentLifeArray = [...state.lifeArray];
      currentLifeArray[action.payload.id] = true;
      return { ...state, lifeArray: currentLifeArray };
    default:
      return { ...state };
  }
};

const reducer = combineReducers({ game: gameReducer });
export default reducer;
