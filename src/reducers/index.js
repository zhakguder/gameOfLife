// randomly initialize a  gameboard (pick alive cells)

import { combineReducers } from "redux";
const gameReducer = (state = { res: 10 }, action) => {
  return state;
};

const reducer = combineReducers({ game: gameReducer });
export default reducer;
