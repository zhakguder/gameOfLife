import { SEND_LIVE, CLEAR_LIVES, SEND_ALL_LIVES } from "../actions/types";
// randomly initialize a  gameboard (pick alive cells)
import { nCells, nRows } from "../config";

import { combineReducers } from "redux";
const gameReducer = (
  state = { lifeArray: new Array(nCells * nRows).fill(false) },
  action
) => {
  switch (action.type) {
    case SEND_LIVE:
      const { id, alive } = action.payload;
      var currentLifeArray = [...state.lifeArray];
      currentLifeArray[id] = alive;
      return { ...state, lifeArray: currentLifeArray };
    case CLEAR_LIVES:
      return { ...state, lifeArray: [] };
    case SEND_ALL_LIVES:
      return { ...state, lifeArray: action.payload };
    default:
      return { ...state };
  }
};

const reducer = combineReducers({ game: gameReducer });
export default reducer;
