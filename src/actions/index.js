import { SEND_LIVE, CLEAR_LIVES, SEND_ALL_LIVES } from "./types";
export const sendLive = (id, alive) => {
  return { type: SEND_LIVE, payload: { id: id, alive: alive } };
};

export const clearLives = () => {
  return { type: CLEAR_LIVES };
};
export const sendAllLives = lifeArray => {
  return { type: SEND_ALL_LIVES, payload: lifeArray };
};
