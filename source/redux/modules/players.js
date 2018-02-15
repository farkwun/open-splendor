import * as mock from "./MockData";

import { mergeCoins, getCoinsLeft } from "../../helpers/Helpers";
import { TAKE_STASH, BUY_CARD } from "./shared";

export default (state = mock.players, action) => {
  switch (action.type) {
    case TAKE_STASH:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          coins: mergeCoins(state[action.playerId].coins, action.stash)
        }
      };
    case BUY_CARD:
      return {
        ...state,
        [action.player.id]: {
          ...action.player,
          cards: [...action.player.cards, action.cardId],
          coins: getCoinsLeft(action.player.coins, action.cardId, action.player)
        }
      };
    default:
      return state;
  }
};
