import { SEND_LIVE } from "./types";
export const sendLive = id => {
  return { type: SEND_LIVE, payload: { id: id } };
};
